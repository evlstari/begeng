"use strict";
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const { Schema } = mongoose;

// Create Schema Instance and add schema propertise
const TodoSchema = new Schema({
  //nama lagu
  lagu: {
    type: String,
    required: true,
  },
  //penyanyi
  singer: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("student", TodoSchema);

// TodoSchema.save((err, saveTodo) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Todo berhasil disimpan:", savedTodo);
//   }
// });

// create and export model
module.exports = Todo;
