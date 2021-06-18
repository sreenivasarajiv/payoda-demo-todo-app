const { Todo } = require("../models/todo.model");

async function getTodos() {
  return await Todo.find();
}

async function getTodosById(_id) {
  return await Todo.findOne({ _id });
}

async function createTodos(todo) {
  const _todo = new Todo(todo);
  await _todo.save();
  return _todo;
}

async function updateTodos(id, todo) {
  const result = await Todo.findByIdAndUpdate(id, todo, { new: true });
  return result;
}

module.exports = {
  getTodos,
  getTodosById,
  createTodos,
  updateTodos,
};
