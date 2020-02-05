const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const boardsRouter = require('./controllers/board')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(middleware.requestLogger)

app.use('/api/board', boardsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
