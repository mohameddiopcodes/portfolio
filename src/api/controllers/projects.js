const Project = require('../models/Project')

module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteProject
}

async function create(req, res) {
    try {
        delete req.body.email
        const project = await Project.create(req.body)
        res.json({project, totalPages: await Project.countDocuments({})}).status(200)
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function index(req, res) {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 }).limit(9)
        res.json({projects: projects})
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function show(req, res) {
    try {
        const project = await Project.findById(req.params.id)
        res.json(project)
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function update(req, res) {
    try {
        delete req.body.email
        const project = await Project.findByIdAndUpdate(req.params.id, req.body)
        res.json({project, totalPages: await Project.countDocuments({})})
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function deleteProject(req, res) {
    try {
        await Project.findByIdAndDelete(req.params.id)
        res.json({})
    } catch(e) {
        res.json({ message: e.message })
    }
}