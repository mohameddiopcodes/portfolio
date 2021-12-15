const express = require('express');
const router = express.Router();

const workCtrl = require('../controllers/work')
const checkAuthorized = require('../config/checkAuthorized')

router.post('/', workCtrl.create)
router.get('/', checkAuthorized, workCtrl.index)
router.get('/:id', checkAuthorized, workCtrl.show)
router.put('/:id', checkAuthorized, workCtrl.update)
router.delete('/:id', checkAuthorized, workCtrl.delete)

module.exports = router;