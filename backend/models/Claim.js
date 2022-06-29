const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClaimSchema = new Schema({
    numeroReclamation: String,
    destinationReclamation: String,
    objetReclamation: String,
    numeroContrat: String,
    assurer: String,
})

const Claim = mongoose.model('Claim', ClaimSchema)
module.exports = Claim