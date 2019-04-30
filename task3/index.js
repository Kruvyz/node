const express = require('express');
const app = express();
const { userRouter, boardRouter, listRouter, taskRouter } = require('./routing');

app.use(express.json());
app.use(express.urlencoded());

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/lists', listRouter);
app.use('/tasks', taskRouter);

app.listen(3001);