let users = [
  { id: 1, name: "user1", email: 'user1@gmail.com' },
  { id: 2, name: "serh", email: 'serh@gmail.com' },
  { id: 3, name: "andr", email: 'andr@gmail.com' }
];

let boards = [
  { id: 1, title: 'board1' },
  { id: 2, title: 'board2' }
];

let lists = [
  { id: 1, title: 'list1', order: 1 },
  { id: 2, title: 'list2', order: 1 },
  { id: 3, title: 'list2', order: 2 }
];

let tasks = [
  { id: 1, title: 'task1', order: 1, description: 'work with webpack', assignee: 2 },
  { id: 2, title: 'task2', order: 2, description: 'start using react', assignee: 1 }
];

// -------- Users --------

function getUsers() {
  return users;
}

function getUser(id) {
  return users.find(user => user.id === id);
}

function addUser(user) {
  users.push(user);
}

function updateUser(id, user) {
  const index = users.findIndex(elem => id === elem.id);
  users = [...users.slice(0, index), user, ...users.slice(index + 1)];
}

function deleteUser(id) {
  const index = users.findIndex(elem => id === elem.id);
  users = [...users.slice(0, index), ...users.slice(index + 1)];
}

// -------- Boards --------

function getBoards() {
  return boards;
}

function getBoard(id) {
  return boards.find(board => board.id === id);
}

function addBoard(board) {
  boards.push(board);
}

function updateBoard(id, board) {
  const index = boards.findIndex(elem => id === elem.id);
  boards = [...boards.slice(0, index), board, ...boards.slice(index + 1)];
}

function deleteBoard(id) {
  const index = boards.findIndex(elem => id === elem.id);
  boards = [...boards.slice(0, index), ...boards.slice(index + 1)];
}


// -------- Lists --------

function getLists() {
  return lists;
}

function getList(id) {
  return lists.find(list => list.id === id);
}

function addList(list) {
  lists.push(list);
}

function updateList(id, list) {
  const index = lists.findIndex(elem => id === elem.id);
  lists = [...lists.slice(0, index), list, ...lists.slice(index + 1)];
}

function deleteList(id) {
  const index = lists.findIndex(elem => id === elem.id);
  lists = [...lists.slice(0, index), ...lists.slice(index + 1)];
}

// -------- Tasks --------

function getTasks() {
  return tasks;
}

function getTask(id) {
  return tasks.find(task => task.id === id);
}

function addTask(task) {
  tasks.push(task);
}

function updateTask(id, task) {
  const index = tasks.findIndex(elem => id === elem.id);
  tasks = [...tasks.slice(0, index), task, ...tasks.slice(index + 1)];
}

function deleteTask(id) {
  const index = tasks.findIndex(elem => id === elem.id);
  tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
}

function getTasksInList(id) {
  return tasks.filter(task => task.order === id);
}

function getListsInBoard(id) {
  return lists.filter(list => list.order === id);
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getBoards,
  getBoard,
  addBoard,
  updateBoard,
  deleteBoard,
  getLists,
  getList,
  addList,
  updateList,
  deleteList,
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
  getListsInBoard,
  getTasksInList
}