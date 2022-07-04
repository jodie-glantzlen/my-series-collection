const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getSeries(db = connection) {
  return db('series').select()
}

module.exports = {
  getSeries
}