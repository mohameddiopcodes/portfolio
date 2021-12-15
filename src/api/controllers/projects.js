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
        const project = await Project.create(req.body)
        res.json(project)
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function index(req, res) {
    try {
        const { page = 1 } = req.query
        const projects = await Project.find({}).limit(3).skip((page - 1) * 3)
        res.json({...projects, isLastPage: page*3 >= Project.countDocuments({})})
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
        const project = await Project.findByIdAndUpdate(req.params.id, req.body)
        res.json(project)
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