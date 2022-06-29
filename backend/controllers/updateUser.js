const User = require ('./../models/userModel')

const updateUser = async(req,res) => {
    try {
        const data = await User.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        )
        res.json({
            status:"SUCCESS",
            data : data
        })
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {updateUser}