const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const verifyHashedData = async (data,hashedData) =>{
    try{
        comparedData = await bcrypt.compare(data,hashedData)
        return comparedData
    }
    catch(error){
        throw error
    }
}
const hashData = async (data,saltRounds=10) =>{
    try{
        const hashedData = await bcrypt.hash(data,saltRounds)
        return hashedData
    }catch(error){
        throw error
    }
}
const changePassword = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body 
        const {oldPwd,newPwd} = data.values
        const existingUser = await User.find({_id:id})
        const matchString = await verifyHashedData(oldPwd,existingUser[0].password)
        if(oldPwd === newPwd){
            console.log("failed")
        }else{
                if(matchString){
                    //?Hash the new password
                    const hashedNewPassword = await hashData(newPwd)
                    //?Update user password
                    await User.updateOne({_id : id},{password : hashedNewPassword})
                    console.log("done")
                }else{
                //?existing record but incorrect reset string record
                    console.log("failed")
                }
        }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {changePassword}