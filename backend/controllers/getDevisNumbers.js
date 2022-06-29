const Devis = require('../models/Quote')
const User = require('../models/userModel')


const getDevisNumbers = async (req,res)=>{
    try {
        const id = req.params.id
        const existingUser = await User.find({_id:id})
        if(existingUser[0]){
            const ib = existingUser[0].identifiantBrokins
            const existingDevis = await Devis.find({identifiantBrokins:ib})
            res.json({data : existingDevis.length})
        }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {getDevisNumbers}