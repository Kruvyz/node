const express = require('express');
const boardRouter = new express.Router();
const { getBoards, getBoard, addBoard, getListsInBoard, updateBoard, deleteBoard } = require('../data');

boardRouter.get('/', (req, res) => {
  res.send(getBoards())
});

boardRouter.get('/:id', (req, res) => {
  const id = +req.params.id;
  res.send(getBoard(id));
});

boardRouter.get('/:id/lists', (req, res) => {
  const id = +req.params.id;
  res.send(getListsInBoard(id));
});

boardRouter.put('/add', (req, res) => {
  const board = req.body.board;
  addBoard(board);
  res.sendStatus(200);
});

boardRouter.post('/:id', (req, res) => {
  const id = +req.params.id;
  const board = req.body.board;
  updateBoard(id, board);
  res.sendStatus(200);
});

boardRouter.delete('/:id', (req, res) => {
  const id = +req.params.id;
  deleteBoard(id);
  res.sendStatus(200);
});

module.exports = boardRouter;