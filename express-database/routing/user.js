const express = require('express');
const userRouter = new express.Router();
const { 
  getAllElementsInColection,
  getElementsInColectionById,
  addElementInColection,
  updateElementInCollection,
  deleteElementInCollection
 } = require('../data');

userRouter.get('/', (req, res) => {
  getAllElementsInColection('users')
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

userRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  getElementsInColectionById('users', id)
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

userRouter.put('/add', (req, res) => {
  const user = req.body.user;
  addElementInColection('users', user)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

userRouter.post('/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body.user;
  
  updateElementInCollection('users', id, user)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

userRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  deleteElementInCollection('users', id)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

module.exports = userRouter;