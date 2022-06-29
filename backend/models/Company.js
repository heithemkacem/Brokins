const mongoose= require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = new Schema ({
    capital_social: String,
    nombre_actionnaire : Number,
    annee_exercice_ca_previsionnel: String,
    ca_export: String,
    effectif_entreprise: Number,
    niveau_ca_previsionnel: String,
    nombre_cadre: Number,
    code_NAF: String,
    email_societe: String, 
    email_dirigeant: String,
})

const Company = mongoose.model('Company', CompanySchema)
module.exports = Company