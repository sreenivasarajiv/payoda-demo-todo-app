const todosService = require("../services/todo.service");

async function getTodos(req, res) {
  const todos = await todosService.getTodos();
  return res.json(todos);
}

async function getTodosById(req, res) {
  const todo = await todosService.getTodosById(req.params.id);
  return res.json(todo);
}

async function createTodos(req, res) {
  let todo = req.body;
  todo = await todosService.createTodos(todo);
  return res.json(todo);
}

async function updateTodos(req, res) {
  const id = req.params.id;
  const todo = req.body;
  const result = await todosService.updateTodos(id, todo);
  return res.json(result);
}

module.exports = {
  getTodos,
  getTodosById,
  createTodos,
  updateTodos,
};
