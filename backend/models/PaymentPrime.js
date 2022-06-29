const mongoose = require('mongoose')
const Schema = mongoose.Schema  

const PaymentPrimeSchema = new Schema ({
    datePaiement: Date,
    primeTtcMensuelle: String,
    statutPaiementPoste: String,
    numeroContrat: String,
    identifiantBrokins: String,
    typePaiement: String,
})

const PaymentPrime = mongoose.model('PaymentPrime' , PaymentPrimeSchema)

module.exports= PaymentPrime