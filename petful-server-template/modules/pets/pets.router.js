const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')


const router = express.Router()

router.get('/api/cat', (req, res, next) => {
  // Return all cats currently up for adoption.
  res.send(Pets.getCats());
})


router.get('/api/dog', (req, res, next) => {
  // Return all dogs currently up for adoption.
  res.send(Pets.getDogs());
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
