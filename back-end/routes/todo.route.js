const router = require("express").Router();
const {
  getTodos,
  getTodosById,
  createTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todos.controller");

module.exports = router
  .get("/", getTodos)
  .get("/:id", getTodosById)
  .post("/", createTodos)
  .put("/:id", updateTodos)
  .delete("/:id", deleteTodos);
