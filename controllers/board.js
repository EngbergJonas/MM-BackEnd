const boardRouter = require('express').Router()
const board = require('../data/board')

boardRouter.get('/', async (req, res, next) => {
  try {
    await res.json(board)
  } catch (exception) {
    next(exception)
  }
})

boardRouter.get('/:id', async (req, res, next) => {
  const id = String(req.params.id)
  try {
    const member = await board.find(member => member.ID_styrelse === id)
    if (member) {
      res.json(member)
    } else {
      res.status(404).json({ error: 'No member matching that id' })
    }
  } catch (exception) {
    next(exception)
  }
})

module.exports = boardRouter
