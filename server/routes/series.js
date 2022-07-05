const express = require('express')
const router = express.Router()

const db = require('../db/series')

// GET /api/v1/series
router.get('/', (req, res) => {
  db.selectSeries()
  .then((series) => {
    console.log('GET route from server-side: ', series)
    res.json(series)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

// POST /api/v1/series
router.post('/', (req, res) => {
  const newSeries = req.body
  console.log('POST route from server-side: ', newSeries)
  db.insertNewSeries(newSeries)
  .then((newSeriesId) => {
    res.json(newSeriesId)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})


module.exports = router