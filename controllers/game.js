const db = require('../models')
const axios = require('axios')
const {response} = require('express')

API Requests

const apiRequest = (req, res) => {
  //when react app makes a request to this route, we make a request to the API
  axios.get(`https://www.giantbomb.com/api/search/?api_key=193eb6224623fc6236f58655173df88e82541b3a&query=${ req.params.q }`)
  .then( response => {
    response.json(respons.data)
  })
}


export default apiRequest