const boardRouter = require('express').Router()
const board = require('../data/board')

boardRouter.get('/', (req, res) => {
  res.json(board)
})

boardRouter.get('/:id', (req, res) => {
  const id = String(req.params.id)
  const member = board.find(member => member.ID_styrelse === id)
  if (member) {
    res.json(member)
  }
  res.status(404).end()
})

module.exports = boardRouter
