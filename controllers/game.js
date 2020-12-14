const db = require('../models')
const axios = require('axios')
const {response} = require('express')

// API Requests

const searchApi = (req, res) => {
  //when react app makes a request to this route, we make a request to the API
  console.log("the params are", req.query.q)
  axios.get(`https://www.giantbomb.com/api/search/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&query=${ req.query.q }&resource=game`)
  // axios.get(`https://www.giantbomb.com/api/search/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&platforms=9&query=super mario world`)
  .then( response => {
    let  searchResults = response.data.results
    console.log(searchResults[0])
    res.json(searchResults)
    // console.log(response.data.results)
  })
  .catch(err => console.log('error', err))
}

const allGames = (req, res) => {
  axios.get('https://www.giantbomb.com/api/games/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format_json&platforms=9')
  .then(foundGames => {
    console.log(foundGames.data)
    res.resdirect('/games/all', {allGames: foundGames.data})
  })
}

// const index = (req, res) => {
//   db.game.findAll().then((foundGames) => {
//       if(!foundGames) return res.json({
//           message: 'No Games found in database.'
//       })
//       //respond with a JSON-ifide object of games
//       res.json({ games: foundGames})
//   })
//   .catch(err => console.log("Error at games#index", err))
// }


module.exports = {
  searchApi,
  allGames
}