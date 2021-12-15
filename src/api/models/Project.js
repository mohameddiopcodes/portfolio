const mongoose = require('mongoose')

const technologies = [
    'HTML',
    'CSS',
    'Javascript',
    'Node',
    'Express',
    'React',
    'React Native',
    'Docker',
]

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    technologies: [{
        type: String,
        enum: technologies,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
})

module.exports = mongoose.model('Project', projectSchema)