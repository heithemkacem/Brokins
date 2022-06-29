const Comparison = require('../models/Comparison')
const User = require('../models/userModel')


const getComparatif = async (req,res)=>{
    try {
        const id = req.params.id
        const existingUser = await User.find({_id:id})
        if(existingUser[0]){
            const ib = existingUser[0].identifiantBrokins
            const existingComparison = await Comparison.find({identifiantBrokins:ib})
            res.json({data : existingComparison})
        }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {getComparatif}