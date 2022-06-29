const Contract = require('../models/Contract')
const User = require('../models/userModel')


const getContractNumbers = async (req,res)=>{
    try {
        const id = req.params.id
        const existingUser = await User.find({_id:id})
        if(existingUser[0]){
            const ib = existingUser[0].identifiantBrokins
            const existingContract = await Contract.find({identifiantBrokins:ib})
            res.json({data : existingContract.length})
        }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {getContractNumbers}