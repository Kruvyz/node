const express = require('express');
const taskRouter = new express.Router();
const { getTasks, getTask, addTask, updateTask, deleteTask } = require('../data');

taskRouter.get('/', (req, res) => {
  res.send(getTasks())
});

taskRouter.get('/:id', (req, res) => {
  const id = +req.params.id;
  res.send(getTask(id));
});

taskRouter.put('/add', (req, res) => {
  const task = req.body.task;
  addTask(task);
  res.sendStatus(200);
});

taskRouter.post('/:id', (req, res) => {
  const id = +req.params.id;
  const task = req.body.task;
  updateTask(id, task);
  res.sendStatus(200);
});

taskRouter.delete('/:id', (req, res) => {
  const id = +req.params.id;
  deleteTask(id);
  res.sendStatus(200);
});


module.exports = taskRouter;