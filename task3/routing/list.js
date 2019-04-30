const express = require('express');
const listRouter = new express.Router();
const { getLists, getList, addList, getTasksInList, updateList, deleteList } = require('../data');

listRouter.get('/', (req, res) => {
  res.send(getLists())
});

listRouter.get('/:id', (req, res) => {
  const id = +req.params.id;
  res.send(getList(id));
});

listRouter.get('/:id/tasks', (req, res) => {
  const id = +req.params.id;
  res.send(getTasksInList(id));
});

listRouter.put('/add', (req, res) => {
  const list = req.body.list;
  addList(list);
  res.sendStatus(200);
});

listRouter.post('/:id', (req, res) => {
  const id = +req.params.id;
  const list = req.body.list;
  updateList(id, list);
  res.sendStatus(200);
});

listRouter.delete('/:id', (req, res) => {
  const id = +req.params.id;
  deleteList(id);
  res.sendStatus(200);
});

module.exports = listRouter;