const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project'
    },
    work: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Work'
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, copyDoc) {
            delete copyDoc.password
            return copyDoc
        }
    }
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT_ROUNDS))
    next()
})

module.exports = mongoose.model('User', userSchema)