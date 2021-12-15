const express = require('express');
const router = express.Router();

const projectsCtrl = require('../controllers/projects')
const checkAuthorized = require('../config/checkAuthorized')

router.get('/', projectsCtrl.index)
router.get('/:id', projectsCtrl.show)
router.post('/', checkAuthorized, projectsCtrl.create)
router.put('/:id', checkAuthorized, projectsCtrl.update)
router.delete('/:id', checkAuthorized, projectsCtrl.delete)

module.exports = router;