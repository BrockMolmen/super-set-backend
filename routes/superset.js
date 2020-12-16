const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/:guid', ctrl.superset.show)

module.exports = router