const Claim = require('../models/Claim')
const User = require('../models/userModel')


const sendClaim = async (req,res)=>{
    try {
        const id = req.params.id
        const {subject} = req.body
        const existingUser = await User.find({_id:id})
        if(existingUser[0]){
            const ib = existingUser[0].identifiantBrokins
            const randomNumber= Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
            const newClaim = new Claim({
                numeroReclamation: randomNumber,
                destinationReclamation: existingUser[0].adresse,
                objetReclamation: subject,
                numeroContrat: ib,
                assurer: existingUser[0].nom + " " + existingUser[0].prenom
            })
            await newClaim.save()
            res.json({data : newClaim})
            }
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {sendClaim}