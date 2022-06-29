const User = require('../models/userModel')


const getUser = async (req,res)=>{
    try {
        const id = req.params.id
        const existingUser = await User.find({_id:id})
        res.json({
            data:existingUser[0]
        })
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {getUser}