const express = require('express');
const boardRouter = new express.Router();
const { 
  getAllElementsInColection,
  getElementsInColectionById,
  addElementInColection,
  updateElementInCollection,
  deleteElementInCollection
 } = require('../data');

boardRouter.get('/', (req, res) => {
  getAllElementsInColection('boards')
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

boardRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  getElementsInColectionById('boards', id)
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

boardRouter.put('/add', (req, res) => {
  const board = req.body.board;
  addElementInColection('boards', board)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

boardRouter.post('/:id', (req, res) => {
  const id = req.params.id;
  const board = req.body.board;
  
  updateElementInCollection('boards', id, board)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

boardRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  deleteElementInCollection('boards', id)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

module.exports = boardRouter;