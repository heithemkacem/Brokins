const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.CLIENT_EMAIL,
      pass: process.env.CLIENT_PASSWORD,
    },
  });

const sendContact = (req,res) => {
    try {
        const mailOptions = {
            from: req.body.email, // Sender adress
            to: 'botverifbrokins@outlook.com', // Receiver adress
            subject: "CONTACT: " + req.body.subject, // Subject line
            html:`
                <p>Vous avez une nouvelle demande de contact!</p>
                <h3>Détails de contact:</h3>
                <ul>
                    <li>TypeEmail: ${req.body.quiEtesVous}</li>
                    <li>Nom: ${req.body.nom} </li>
                    <li>Prénom: ${req.body.prenom} </li>
                    <li>Société: ${req.body.societe} </li>
                    <li>Email: ${req.body.email} </li>
                    <li>Objet: ${req.body.subject} </li>
                    <li>Message: ${req.body.message} </li>
                </ul>
            `
        }
        transporter.sendMail(mailOptions, function(err, info){
            if(err) {
                res.status(500).send({
                    success:false,
                    message:'Quelque chose s\'est mal passé, réessayez plus tard'
                })
            } else {
                res.send({
                    success: true,
                    message: 'Merci de nous avoir contacté, nous vous répondrons sous peu'
                })
            }
        })
    }
    catch{
        res.status(500).send({
            success:false,
            message: 'Quelque chose s\'est mal passé. Veuillez réessayer'
        })
    }
}

module.exports = {sendContact}