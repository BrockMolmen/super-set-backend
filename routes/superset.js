const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.superset.show)

module.exports = router