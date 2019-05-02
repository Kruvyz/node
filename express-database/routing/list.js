const express = require('express');
const listRouter = new express.Router();
const { 
  getAllElementsInColection,
  getElementsInColectionById,
  addElementInColection,
  updateElementInCollection,
  deleteElementInCollection
 } = require('../data');

listRouter.get('/', (req, res) => {
  getAllElementsInColection('lists')
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

listRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  getElementsInColectionById('lists', id)
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

listRouter.put('/add', (req, res) => {
  const list = req.body.list;
  addElementInColection('lists', list)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

listRouter.post('/:id', (req, res) => {
  const id = req.params.id;
  const list = req.body.list;
  
  updateElementInCollection('lists', id, list)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

listRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  deleteElementInCollection('lists', id)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

module.exports = listRouter;