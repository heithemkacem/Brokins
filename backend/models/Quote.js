const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema ({
    numeroDevis: String,
    identifiantBrokins : String,
    assureur: String,
    nomProduitTechnique: String,
    nomProduitCommercial: String,
    primeTtcAnnuelle:String,
    primeTtcMensuelle: String,
    listeExclusion: String,
    referenceDocumentaire: String,
    statusDevis: String,
    dateEnvoie: String,
    capitauxGarantis: String,
    link:String,
    dateEcheanceDevis: String,
},
    {
        timestamps:true
    }
)

const Quote = mongoose.model('Quote', QuoteSchema)
module.exports = Quote
