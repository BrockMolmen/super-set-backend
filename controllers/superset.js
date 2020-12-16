const db = require('../models')
const axios = require('axios')
const {response} = require('express')


const show = (req, res) => {
  console.log(req.params.guid)
  axios.get(`https://www.giantbomb.com/api/game/${req.params.guid}/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&field_list=deck,guid,image,name,original_release_date`)
  .then((response) => {
    let details = response.data.results
    console.log(details)
    res.json(details)
  })
}

const destroy = (req, res) => {
  console.log(req.params)
  db.game.destroy({
    where: {
      userId: req.params.id,
      guid: req.params.guid
    }
  })
}


module.exports = {
  show,
  destroy
}

