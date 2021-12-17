const mongoose = require('mongoose')

const workSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    isPro: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    percentCompleted: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Work', workSchema)