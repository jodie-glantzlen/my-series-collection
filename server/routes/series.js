const express = require('express')
const router = express.Router()

const db = require('../db/series')

// GET /api/v1/series
router.get('/', (req, res) => {
  db.selectSeries()
  .then((series) => {
    //console.log('GET route from server-side: ', series)
    res.json(series)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

// POST /api/v1/series
router.post('/', (req, res) => {
  const { title, author } = req.body
  const newSeries = {
    title,
    author
  }

  //console.log('POST route from server-side: ', newSeries)

  db.insertNewSeries(newSeries)
  .then((IdArr) => {
    const newSeriesId = IdArr[0]
    return db.selectSeriesById(newSeriesId)
  })
  .then((newSeries) => {
    res.json(newSeries)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

// DELETE /api/v1/series/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteSeries(id)
  .then(() => {
    res.json('delete successful!')
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

// PATCH /api/v1/series/:id
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const { title, author } = req.body
  const changes = {
    title,
    author
  }
  
  db.updateSeries(id, changes)
  .then(() => {
    return db.selectSeriesById(id)
  })
  .then((updatedSeries) => {
    console.log(updatedSeries)
    res.json(updatedSeries)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})


module.exports = router