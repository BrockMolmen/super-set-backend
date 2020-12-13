const router = require('express').Router()
// const passport = require('../passport')
const ctrl = require('../controllers/game')


router.get('/search', ctrl.apiRequest)


// PATH = /api/v1/game
router.get('/', ctrl.index)


module.exports = router
