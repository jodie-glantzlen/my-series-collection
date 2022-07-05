const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function selectSeries(db = connection) {
  return db('series').select()
}

function insertNewSeries(newSeries, db = connection) {
  return db('series').insert(newSeries)
}

module.exports = {
  selectSeries,
  insertNewSeries
}