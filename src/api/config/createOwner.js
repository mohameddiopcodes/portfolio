const User = require('../models/User')

const { OWNER_NAME, OWNER_EMAIL, OWNER_PASSWORD } = process.env

async function createOwner() {
    if(OWNER_NAME && OWNER_EMAIL && OWNER_PASSWORD && !(await User.findOne({ email: OWNER_EMAIL }))) {
        User.create({name: OWNER_NAME, email: OWNER_EMAIL, password: OWNER_PASSWORD})
    }
}

createOwner()