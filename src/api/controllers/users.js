const bcrypt = require('bcryptjs')

module.exports = {
    login
}

async function login(req, res) {
    try {
        const match = await bcrypt.compare(req.body.password, req.user.password)
        if(!match) throw new Error('Wrong Password')
        res.json(req.user)
    } catch(e) {
        res.json({ message: e.message })
    }
}