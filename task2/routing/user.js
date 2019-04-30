const express = require('express');
const userRouter = new express.Router();
const { getUsers, getUser, addUser, updateUser, deleteUser } = require('../data');

userRouter.get('/', (req, res) => {
  res.send(getUsers())
});

userRouter.get('/:id', (req, res) => {
  const id = +req.params.id;
  res.send(getUser(id));
});

userRouter.put('/add', (req, res) => {
  const user = req.body.user;
  addUser(user);
  res.sendStatus(200);
});

userRouter.post('/:id', (req, res) => {
  const id = +req.params.id;
  const user = req.body.user;
  updateUser(id, user);
  res.sendStatus(200);
});

userRouter.delete('/:id', (req, res) => {
  const id = +req.params.id;
  deleteUser(id);
  res.sendStatus(200);
});

module.exports = userRouter;