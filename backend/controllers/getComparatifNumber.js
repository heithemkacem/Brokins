const Comparatif = require('../models/Comparison')
const User = require('../models/userModel')


const getComparatifNumber = async (req,res)=>{
    try {
        const id = req.params.id
        const existingUser = await User.find({_id:id})
        if(existingUser[0]){
            const ib = existingUser[0].identifiantBrokins
            const existingComparatif = await Comparatif.find({identifiantBrokins:ib})
            res.json({data : existingComparatif.length})
        }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {getComparatifNumber}