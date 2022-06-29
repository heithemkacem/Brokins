const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const ComparisonSchema = new Schema ({
    numeroComparatif: String,
    identifiantBrokins: String,
    assureur: String,
    nomProduitTechnique: String,
    nomProduitCommercial: String,
    primeTtcAnnuelle: String,
    primeTtcMensuelle:String,
    listeGarantie: String,
    franchise: String,
    listeExclusion: String,
    referenceDocumentaire: String,
    dateEnvoie: String,
    capitauxGarantis: String,
    link:String,
    dateEcheanceComparatif: String,
}, 
    {
        timestamps:true
    }
)

const Comparison = mongoose.model('Comparison', ComparisonSchema)
module.exports = Comparison