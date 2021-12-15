const User = require('../models/User')

module.exports = async function(req, res, next) {
    try {
        const { userId } = req.query
        let user = await User.findById(userId) || await User.findOne({ email: req.body.email })
        if(!user) throw new Error('Action unauthorized')
        req.user = user
        next()
    } catch(e) {
        res.status(401).json({ message: e.message })
    }
}