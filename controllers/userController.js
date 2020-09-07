const User = require("../models/user")

exports.getOneUser = (req, res) => {

    req.profile.hashed_password = undefined
    req.profile.salt = undefined

    res.json({
        user: req.profile
    })

}

exports.updateOneUser = (req, res) => {

    User.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, user) => {

        if(err) {
            return res.status(400).json({err})
        }
        
        user.hashed_password = undefined
        user.salt = undefined

        res.json({user})

    })

}
