const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ContractSchema = new Schema ({
    numeroContract: String,
    identifiantBrokins: String,
    dateEffetContract: String,
    assureur: String,
    nomProduitTechnique:String,
    nomProduitCommercial: String,
    primeTtcAnnuelle: String,
    primeTtcMensuelle: String,
    fraisFractionnement: String,
    listeGarantie: String,
    franchise: String,
    listeExclusion: String,
    referenceDocumentaire: String,
    statusContrat: String,
    dateEnvoie: String,
    typePaiement: String,
    datePaiment: String,
    dateEcheanceContrat: String,
    capitauxGarantis: String,
    link: String,

},
    {
        timestamps:true
    }
)

const Contract = mongoose.model('Contract' , ContractSchema)

module.exports= Contract