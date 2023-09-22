// import Todo Model
const Todo = require("../models/todo_model");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    //error disini data tidak bisa muncul
    console.log(todos);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
};

// createNewTodo function - To create new todo
exports.createNewTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
};

// updateTodo function - To update todo status by id
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
};

// deleteTodo function - To delete todo by id
exports.deleteTodo = async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo successfully deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};
