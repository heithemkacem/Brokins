const mongoose = require('mongoose')
const Schema = mongoose.Schema 




const UserSchema = new Schema({
    identifiantBrokins: String,
    email: String,
    password: String,
    verified: Boolean, 
    civilite: String, 
    nom: String,
    prenom: String,
    societe: String,
    adresse: String,  
    complementAdresse: String,
    code_postal: String,
    ville: String,
    emailSociete: String,
    emailDirigeant:String, 
    telephoneFixe: String,
    telephoneMobile: String,
    telephoneSecondaire: String,
    fax: String,
  
    role: ["suspect","prospect","client"],
} , {
    timestamps: true,
})

const User = mongoose.model('User' , UserSchema)

module.exports= User