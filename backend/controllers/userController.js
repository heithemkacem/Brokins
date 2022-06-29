const { json, redirect } = require('express/lib/response')
const bcrypt = require('bcryptjs')
// models
const User = require('../models/userModel')
const UserVerification = require('../models/UserVerification')
const PasswordReset = require('./../models/PasswordReset')
// email handler 
const nodemailer = require('nodemailer')
// unique string (uuid)
const {v4: uuidv4} = require('uuid')
// env config 
require("dotenv").config() 
// path for static verified page 
const path = require('path')
const { error } = require('console')
// nodemailer 
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.CLIENT_EMAIL,
      pass: process.env.CLIENT_PASSWORD,
    },
  });
// testing success 
transporter.verify((error, success) => {
    if(error) {
        console.log(error)
    }else {
        console.log("Ready for messages")
        console.log(success)
    }
})

// @desc    Register new user
// @route   POST /user/signup
// @access  Public
const signUp = (req , res) => {
    let {identifiantBrokins , email , password} = req.body

    if(!identifiantBrokins || !email || !password){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        })
    }else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        json.res({
            status : "FAILED",
            message: "Invalid email Adress"
        })
    }else if (password.length< 8){
        res.json({
            status:"FAILED",
            message:"Password is too short"
        })
    }else {
        // check if user exists
        User.find({email}).then(result=>{
            if (result.length){
                // User already exists 
                res.json({
                    status : "FAILED",
                    message:"User with the provided email already exists"
                })
            }else{
                // try to create new user 
                // password handling 
                const saltRounds = 10 
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        identifiantBrokins,
                        email,
                        password:hashedPassword,
                        verified : false,
                    })
                    newUser.save().then(result =>{
                        // handle account verification 
                        sendVerificationEmail(result, res)
                    }).catch(err=>{
                        res.json({
                            status:"FAILED",
                            message: "An error occured while saving the user!"
                        })
                    })
                }).catch(err=>{
                    res.json({
                        status:"FAILED",
                        message: "An error occured while hashing password!"
                    })
                })
            }
        }).catch(err => {
            console.log(err)
            res.json({
                status:"FAILED",
                message:"An error occured while checking for user's existance"
            })
        })
    }
}

// send verification email 
const sendVerificationEmail = ({_id, email}, res) => {
    // url to be used to in the email
    const currentUrl ="http://localhost:5008/"

    const uniqueString = uuidv4() + _id 
    // mail options 
    const mailOptions = {
        from : process.env.AUTH_EMAIL,
        to: email, 
        subject: "Email verification",
        html : `<p>Verify your email adress to complete the signup and login.</p> <p> this link <b>expires in 6 hours</b>. </p>
        <p>Press <a href=${currentUrl + "user/verify/" + _id + "/" + uniqueString}>Here</a> to proceed . </p>`,
    }

    // hash the uniqueString 
    const saltRounds = 10 
    bcrypt.hash(uniqueString , saltRounds)
    .then((hashedUniqueString)=>{
        // set values in userVerification collection
        const newVerification = new UserVerification({
            userId: _id,
            uniqueString: hashedUniqueString,
            createdAt: Date.now(),
            expiresAt: Date.now()+ 21600000
        })
        newVerification
        .save()
        .then(()=> {
            transporter
            .sendMail(mailOptions)
            .then(()=>{
                // email sent and verification record saved
                res.json({
                    status:"PENDING",
                    message:"Verification email sent!"
                })
            })
            .catch((error)=>{
                console.log(error)
                res.json({
                    status:"FAILED",
                    message:"Verification email failed"
                })
            })
        })
        .catch((error)=>{
            console.error(error)
            res.json({
                status:"FAILED",
                message:"Couldn't save verification email data!"
            })
        })
    })
    .catch(()=>{
        res.json({
            status:"FAILED",
            message:"An error occured while hashing email data!"
        })
    })
}

// @desc    Verify Email
// @route   GET /verify/:userId/:uniqueString
// @access  Private
const verifEmail = (req , res) => {
    let {userId, uniqueString} = req.params
    UserVerification
    .find({userId})
    .then((result)=>{
        if (result.length > 0 ){
            // user verification record exists , proceed 
            const {expiresAt} = result[0]
            const hashedUniqueString = result[0].uniqueString
            // checking for expired uniqueString
            if (expiresAt < Date.now()){
                UserVerification
                .deleteOne({userId})
                .then(result=> {
                    User
                    .deleteOne({_id: userId})
                    .then(()=>{
                        let message = "Link expired, PLease sign in again."
                        res.redirect(`/user/verified/error=true&message=${message}`)
                    })
                    .catch((error)=>{
                        let message = "Clearing user with expired uniqueString failed"
                        res.redirect(`/user/verified/error=true&message=${message}`)
                    })
                })
                .catch((error)=>{
                    console.log(error)
                    let message = "An error occured while clearing expired user verification record."
                    res.redirect(`/user/verified/error=true&message=${message}`)
                })
            } else {
                // valid record exists so we valiate the userString 
                bcrypt
                .compare(uniqueString, hashedUniqueString)
                .then(result => {
                    if (result) {
                        // strings match
                        User
                        .updateOne({_id: userId}, {verified: true})
                        .then(()=>{
                            UserVerification
                            .deleteOne({userId})
                            .then(()=>{
                                res.sendFile(path.join(__dirname, "./../views/verified.html"))
                            })
                            .catch((error)=>{
                                console.log(error)
                                let message = "An error occured while finalizing successful verification."
                                res.redirect(`/user/verified/error=true&message=${message}`)
                            })
                        })
                        .catch((error)=>{
                            console.log(error)
                            let message = "An error occured while updating user record to show verified."
                            res.redirect(`/user/verified/error=true&message=${message}`)
                        })
                    }else {
                        // existing record but incorrect verification details passed.
                        let message = "Invalid verification details passed. Check your inbox."
                        res.redirect(`/user/verified/error=true&message=${message}`)
                    }
                })
                .catch((error)=>{
                    let message = "An error occured while comparing unique strings."
                    res.redirect(`/user/verified/error=true&message=${message}`)
                })
            }
        }else {
            // user verification record doesn't exist
            let message = "Account record doesn't exist or has been verified already. Please sign up or log in."
            res.redirect(`/user/verified/error=true&message=${message}`)
        }
    })
    .catch((error)=>{
        console.log(error)
        let message = "An error occured while checking for existing user verification record."
        res.redirect(`/user/verified/error=true&message=${message}`)
    })
}

// Verified Page 
const verifiedPage = (req, res)=> {
    res.sendFile(path.join(__dirname, "./../views/verified.html"))
}

// @desc    Signin user
// @route   POST /user/signin
// @access  Public
const signIn = (req, res)=> {
    let {email , password} = req.body
    if(!email || !password){
        res.json({
            status:"FAILED",
            message:"Empty credentials supplied!"
        })
    }else {
        // check if user exist 
        User.find({email})
        .then(data => {
            if (data) {
                // user exists 
                // check if user is verified
                if (!data[0].verified){
                    res.json({
                        status:"FAILED",
                        message:"Email is not verified yet , please check your inbox"
                    })
                }else{
                    const hashedPassword = data[0].password 
                bcrypt.compare(password, hashedPassword).then(result => {
                    if (result){
                        // password match 
                        res.json({
                            status:"SUCCESS",
                            message:"Signin successful",
                            data:data
                        })
                    }else {
                        res.json({
                            status:"FAILED",
                            message:"Invalid password entered",
                        })
                    }
                }).catch(err => {
                    res.json({
                        status:"FAILED",
                        message:"An error occured while comparing passwords"
                    })
                })
                }
                
            }else{
                res.json({
                    status:"FAILED",
                    message:"Invalid credentials entered",
                })
            }
        }).catch(err => {
            res.json({
                status:"FAILED",
                message:"An error occured while checking for existing user",
            })
        })
    }
}
// @desc    requestResetPassword
// @route   POST /user/signin
// @access  Public
const requestResetPassword = (req, res) => {
    const {email, redirectUrl } = req.body
    // check if email exists 
    User
    .find({email})
    .then((data)=>{
        if(data.length){
            // user exists 

            // check if user is verified
            if(!data[0].verified){
                res.json({
                    status:"FAILED",
                    message:"Email is not verified yet. Please check your inbox.",
                })
            }else {
                // proceed with  email to reset password
                sendResetEmail(data[0], redirectUrl , res )
            }
        }else{
            res.json({
                status:"FAILED",
                message:"no account with the supplied email exists.",
            })
        }
    })
    .catch(error => {
        console.log(error)
        res.json({
            status:"FAILED",
            message:"An error occured while checking for existing user",
        })
    })
}

// Send password reset email 
const sendResetEmail = ({_id, email}, redirectUrl, res) => {
    const resetString = uuidv4() + _id
    // Clear all existing reset records 
    PasswordReset
    .deleteMany({userId: _id})
    .then(result => {
        // Reset records deleted successfully
        // send the email

        //mail options 
        const mailOptions = {
            from : process.env.AUTH_EMAIL,
            to: email, 
            subject: "Password Reset",
            html : `<p>We heard that you lost the password</p> <p> Don't worry, use the link below to reset it.<b>it expires in 60 minutes</b>. </p>
            <p>Press <a href=${redirectUrl + "/" + _id + "/" + resetString}>Here</a> to proceed . </p>`,
        }

        // hash the reset string 
        const saltRounds = 10 
        bcrypt
            .hash(resetString, saltRounds)
            .then(hashedResetString => {
                // set values in password reset collection 
                const newPasswordReset = new PasswordReset({
                    userId: _id,
                    resetString: hashedResetString,
                    createdAt: Date.now(),
                    expiresAt: Date.now()+ 3600000
                })
                newPasswordReset
                    .save()
                    .then(()=>{
                        transporter
                            .sendMail(mailOptions)
                            .then(()=>{
                                // reset email sent and password reset record saved.
                                res.json({
                                    status:"PENDING",
                                    message:"Password reset email sent."
                                })
                            })
                            .catch(error => {
                                console.log(error)
                                res.json({
                                    status: "FAILED",
                                    message:"Password reset email failed."
                                })
                            })
                    })
                    .catch(error => {
                        console.log(error)
                        res.json({
                            status: "FAILED",
                            message:"Couldn't save password reset Data!"
                        })
                    })
            })
            .catch(error=> {
                console.log(error)
                res.json({
                    status: "FAILED",
                    message:"An error occured while hashing the password reset data!"
                })
            })
    })
    .catch(error => {
        console.log(error)
        res.json({
            status: "FAILED",
            message:"Clearing existing password reset records failed."
        })
    })
}

const resetPassword = (req,res) => {
    let {userId, resetString, newPassword} = req.body
    PasswordReset
        .find({userId})
        .then(result => {
            if (result.length > 0){
                // password reset record exists 
                const {expiresAt} = result[0]
                const hashedResetString = result[0].resetString
                // checking for expired reset String
                if (expiresAt < Date.now()){
                    PasswordReset
                        .deleteOne({userId})
                        .then(()=>{
                            // Reset record deleted successfully
                            res.json({
                                status:"FAILED",
                                message:"Password reset link has expired."
                            })
                        })
                        .catch(error=> {
                            console.log(error)
                            res.json({
                                status:"FAILED",
                                message:"Clearing password reset record"
                            })
                        })
                }else {
                    // valid reset record exists , so validate the reset string
                    // compare the hashed reset String
                    bcrypt
                        .compare(resetString, hashedResetString)
                        .then((result)=>{
                            if(result){
                                // strings matched 
                                // hash password again
                                const saltRounds = 10
                                bcrypt
                                    .hash(newPassword, saltRounds)
                                    .then(hashedNewPassword=> {
                                        // update user password
                                        User
                                            .updateOne({_id: userId},{password: hashedNewPassword})
                                            .then(()=>{
                                                // update complete. Delete reset record
                                                PasswordReset
                                                    .deleteOne({userId})
                                                    .then(()=>{
                                                        // both user record and reset record updated.
                                                        res.json({
                                                            status:"SUCCESS",
                                                            message:"Password has been reset successfully"
                                                        })
                                                    })
                                                    .catch(error=>{
                                                        console.log(error)
                                                        res.json({
                                                            status:"FAILED",
                                                            message:"An error occured while finalizing password reset."
                                                        })
                                                    })
                                            })
                                            .catch(error=>{
                                                console.log(error)
                                                res.json({
                                                    status:"FAILED",
                                                    message:"Updating new password failed."
                                                })
                                            })
                                    })
                                    .catch(error=>{
                                        console.log(error)
                                        res.json({
                                            status:"FAILED",
                                            message:"An error occured while hashing new password"
                                        })
                                    })
                            }else{
                                // Existing record but incorrect reset string passed.
                                res.json({
                                    status:"FAILED",
                                    message:"Invalid password reset details "
                                })
                            }
                        })
                        .catch(error=>{
                            console.log(error)
                            res.json({
                                status:"FAILED",
                                message:"Comparing password reset strings failed."
                            })
                        })
                }
            } else {
                // Password reset record doesn't exist 
                res.json({
                    status:"FAILED",
                    message:"Password reset request not found."
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.json({
                status: "FAILED",
                message:"checking for existing password reset records failed."
        })
        })
}

// @desc    get User
// @route   GET /user/:id
// @access  Public






module.exports = {
    signUp,
    signIn,
    verifEmail,
    verifiedPage,
    requestResetPassword,
    resetPassword,

}