const Quote = require('../models/Quote')
const User = require('../models/userModel')


const getDevis = async (req,res)=>{
    try {
        const id = req.params.id
        const existingUser = await User.find({_id:id})
        if(existingUser[0]){
            const ib = existingUser[0].identifiantBrokins
            const existingQuote = await Quote.find({identifiantBrokins:ib})
            res.json({data : existingQuote})
        }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {getDevis}