const express = require('express')
const path = require('path')

const series = require('./routes/series')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/series', series)

module.exports = server
