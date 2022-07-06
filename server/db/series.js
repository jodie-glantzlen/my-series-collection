const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function selectSeries(db = connection) {
  return db('series').select()
}

function selectSeriesById(id, db = connection) {
  return db('series').select().where('id', id).first()
}

function insertNewSeries(newSeries, db = connection) {
  return db('series').insert(newSeries)
}

function deleteSeries(id, db = connection) {
  return db('series').where('id', id).del()
}

function updateSeries(id, details, db = connection) {
  return db('series').where('id', id).update(details)
}

module.exports = {
  selectSeries,
  selectSeriesById,
  insertNewSeries,
  deleteSeries,
  updateSeries
}