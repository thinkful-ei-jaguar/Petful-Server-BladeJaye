const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.send(People.get())
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { newPerson } = req.body
  People.enqueue(newPerson)
  res.send(201)
})

router.delete('/', json, (req, res) => {
  People.dequeue()
  res.send(204)
})

module.exports = router
