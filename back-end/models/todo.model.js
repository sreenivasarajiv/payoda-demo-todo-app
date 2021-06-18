const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
