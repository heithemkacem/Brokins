const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoOwnershipSchema = new Schema ({
    annee_construction: String,
    indicateur_syndic_pro: String,
    nombre_mcarre: Number,
    nombre_lots: Number,
    assureur_precedent: String
})

const CoOwnership = mongoose.model('CoOwnership', CoOwnershipSchema)
module.exports = CoOwnership