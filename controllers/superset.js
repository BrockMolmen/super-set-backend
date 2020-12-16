const db = require('../models')
const axios = require('axios')
const {response} = require('express')


const show = (req, res) => {
  console.log("req")
  // axios.get(`https://www.giantbomb.com/api/game/3030-2708/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&field_list=deck,guid,image,name,original_release_date`)
}


module.exports = {
  show
}

