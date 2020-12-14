const router = require('express').Router()
// const passport = require('../passport')
const ctrl = require('../controllers')

// path search
router.get('/search', ctrl.game.searchApi)


// PATH = /api/v1/game
router.get('/all', ctrl.game.allGames)


module.exports = router
