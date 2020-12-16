const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/:guid', ctrl.superset.show)
router.delete('/:id/:guid', ctrl.superset.destroy)

module.exports = router