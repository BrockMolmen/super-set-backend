const db = require('../models')
const axios = require('axios')

// search request

// const searchApi = (req, res) => {
//   //when react app makes a request to this route, we make a request to the API
//   console.log("the params are", req.query.q)
//   //need to adjust search results to only show supernintendo games...maybe query over allgames results...?
//   axios.get(`https://www.giantbomb.com/api/search/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&query=${ req.query.q }&resource=game`)
//   .then( response => {
//     let  searchResults = response.data.results
//     console.log(searchResults[0])
//     res.json(searchResults)
//   })
//   .catch(err => console.log('error', err))
// }

const index = (req, res) => {
  axios.get("https://www.giantbomb.com/api/games/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&platforms=9&filter=deck,api_detail_url,name,image,guid&sort=name:asc")
    .then(response => {
      // console.log(response.data)
      let theGames = response.data
      res.json(theGames)
    })
    .catch(err => console.log('error', err))
}

const create = (req, res) => {
  db.game.findOrCreate({
    where: {
      userId: req.body.userId,
      name: req.body.name,
      guid: req.body.guid
    }
  }).then(function (createGameSet) {
    res.json(createGameSet)
    // console.log(createGameSet)
  })
}

const show = (req, res) => {
  db.game.findAll({
    where: {
      userId: req.params.id
    }
  }).then((foundGameSet) => {
    res.json(foundGameSet)
  })
}

module.exports = {
  // searchApi,
  index,
  create,
  show,
}