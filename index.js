const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on ${config.PORT}`)
})

/*const express = require('express')
const app = express()
const middleware = require('./utils/middleware')
const board = require('./data/board')
const cors = require('cors')

app.use(cors())
app.use(middleware.requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Muntra Musikanter API</h1>')
})

app.get('/api/board', (req, res) => {
  res.json(board)
})

app.get('/api/board/:id', (req, res) => {
  const id = String(req.params.id)
  const member = board.find(member => member.ID_styrelse === id)
  if (member) {
    res.json(member)
  }
  res.status(404).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) */
