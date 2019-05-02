const express = require('express');
const taskRouter = new express.Router();
const { 
  getAllElementsInColection,
  getElementsInColectionById,
  addElementInColection,
  updateElementInCollection,
  deleteElementInCollection
 } = require('../data');

taskRouter.get('/', (req, res) => {
  getAllElementsInColection('tasks')
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

taskRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  getElementsInColectionById('tasks', id)
    .then(response => res.send(response))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

taskRouter.put('/add', (req, res) => {
  const task = req.body.task;
  addElementInColection('tasks', task)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

taskRouter.post('/:id', (req, res) => {
  const id = req.params.id;
  const task = req.body.task;
  
  updateElementInCollection('tasks', id, task)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

taskRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  deleteElementInCollection('tasks', id)
    .then(response => res.sendStatus(200))
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
});

module.exports = taskRouter;