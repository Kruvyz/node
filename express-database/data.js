const {MongoClient, ObjectId} = require("mongodb");

const url = 'mongodb://localhost:27017';
const databaseName = "node_test";

async function getAllElementsInColection(collectionName) {
  const client = await MongoClient.connect(url, {useNewUrlParser: true});

  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  const findAllData = await collection.find({}).toArray();

  await client.close();

  return findAllData;
}

async function getElementsInColectionById(collectionName, id) {
  const client = await MongoClient.connect(url, {useNewUrlParser: true});

  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  const findData = await collection.findOne({_id: ObjectId(id)});

  await client.close();

  return findData;
}

async function addElementInColection(collectionName, element) {
  const client = await MongoClient.connect(url, {useNewUrlParser: true});

  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  await collection.insertOne(element);

  if (collectionName === 'lists') {
    const boardCollection = db.collection('boards');
    const list = await collection.findOne(element);
    const board = await boardCollection.findOne({_id: ObjectId(list.order)});
    let newBoardLists = [];

    if (board.lists)
      newBoardLists = [...board.lists, list._id];
    else 
      newBoardLists = [list._id];

    await boardCollection.updateOne({_id: ObjectId(board._id)}, {$set: {lists: newBoardLists}});

  } else if (collectionName === 'tasks') {
    const listCollection = db.collection('lists');
    const task = await collection.findOne(element);
    const list = await listCollection.findOne({_id: ObjectId(task.order)});
    let newListTasks = [];

    if (list.tasks)
      newListTasks = [...list.tasks, task._id];
    else 
      newListTasks = [task._id];

    await listCollection.updateOne({_id: ObjectId(list._id)}, {$set: {tasks: newListTasks}});
  }

  await client.close();
}

async function updateElementInCollection(collectionName, id, element) {
  const client = await MongoClient.connect(url, {useNewUrlParser: true});

  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  await collection.updateOne({_id: ObjectId(id)}, {$set: element});

  await client.close();
}

async function deleteElementInCollection(collectionName, id) {
  const client = await MongoClient.connect(url, {useNewUrlParser: true});

  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  await collection.remove({_id: ObjectId(id)});

  await client.close();
}

module.exports = {
  getAllElementsInColection,
  getElementsInColectionById,
  addElementInColection,
  updateElementInCollection,
  deleteElementInCollection
};