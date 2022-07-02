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

const sendReclamation = (req,res) => {
    try {
        const mailOptions = {
            from: req.body.email, // sender adress
            to: process.env.CLIENT_EMAIL, // reciever adress
            subject: "RECLAMATION:  " + req.body.subject, // sujet de reclamation 
            html:`
                <p>Vous avez une nouvelle reclamation!</p>
                <h3>Détails du Réclamation:</h3>
                <ul>
                    <li>Objet: ${req.body.subject}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Message de réclamation: ${req.body.message}</li>
                </ul>
            `
        }
        transporter.sendMail(mailOptions, function(err,info){
            if(err) {
                res.status(500).send({
                    sucess:false,
                    message:'Quelque chose s\'est mal passé, réessayez plus tard.'
                })
            }
            else{
                res.send({
                    sucess:true,
                    message:'Votre réclamation été bien envoyée, nous vous répondrons sous peu.'
                })
            }
        })
    }
    catch{
        res.status(500).send({
            sucess: false,
            message:"Quelque chose s\'est mal passé. Veuillez réessayer plus tard."
        })
    }
}


module.exports = {sendReclamation}