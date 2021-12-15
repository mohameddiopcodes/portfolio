const Work = require('../models/Work')

module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteWork
}

async function create(req, res) {
    try {
        const work = await Work.create(req.body)
        res.json(work)
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function index(req, res) {
    try {
        const { page = 1 } = req.query
        const work = await Work.find({}).limit(3).skip((page - 1) * 3)
        res.json({...work, isLastPage: page*3 >= Work.countDocuments({})})
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function show(req, res) {
    try {
        const work = await Work.findById(req.params.id)
        res.json(work)
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function update(req, res) {
    try {
        const work = await Work.findByIdAndUpdate(req.params.id, req.body)
        res.json(work)
    } catch(e) {
        res.json({ message: e.message })
    }
}

async function deleteWork(req, res) {
    try {
        const work = await Work.findByIdAndDelete(req.params.id)
        res.json({})
    } catch(e) {
        res.json({ message: e.message })
    }
}