const mongoose = require('mongoose');

// declare collection (table) structure/design
const todoListSchema = mongoose.Schema({
    name: String,
    date: Date,
    status: String,
})

const todoListModel = mongoose.model("todos", todoListSchema)
module.exports = todoListModel