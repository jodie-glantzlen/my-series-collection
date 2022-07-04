const express = require('express')
const router = express.Router()

const db = require('../db/series')

// GET /api/v1/series
router.get('/', (req, res) => {
  db.getSeries()
  .then((series) => {
    console.log('GET route from server-side: ', series)
    res.json(series)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})


module.exports = router