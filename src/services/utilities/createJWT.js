const jwt = require('jsonwebtoken')

export default function createJWT(user) {
    console.log(process.env.SALT_ROUNDS)
    return jwt.sign(
        { user }, 
        new Date().getTime().toString(),
        {expiresIn: '24h'}
    )
}
