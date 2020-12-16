const router = require('express').Router()
// const passport = require('../passport')
const ctrl = require('../controllers')

// path search
// router.get('/search', ctrl.game.searchApi)


// PATH = /api/v1/game
router.get('/all', ctrl.game.index)
router.post('/all', ctrl.game.create)
router.get('/:id', ctrl.game.show)



module.exports = router
