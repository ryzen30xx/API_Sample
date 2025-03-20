const todoListModel = require('../models/todoListModel')
const {response} = require("express");
const ViewAllTodos = async (req, res) => {
    try {
        var todos = await todoListModel.find({})
        res.json(todos)

    } catch(err) {
        console.error('Error occured: ' + err);
    }
}
const AddNewTodos = async (req, res) => {
    try {
        await todoListModel.create(req.body)
        res.sendStatus(200)
    } catch(err) {
        console.error('Error occured: ' + err);
    }
}

const DeleteAll = async (req, res) => {
    try {
        await todoListModel.deleteMany()
        res.sendStatus(200)
    } catch (err) {
        res.json({"message": "Error occured" + err})
    }
}

const ViewTodo = async (req, res) => {
    try {
        var todo = await todoListModel.findById(req.params.id)
        res.json(todo)
    } catch(err) {
        console.error('Error occured: ' + err);
    }
}

const EditTodo = async (req, res) => {
    try {
        await todoListModel.findOneAndReplace({ _id: req.params.id }, req.body)
        res.sendStatus(200)

    } catch(err) {
        console.error('Error occured: ' + err);
    }
}

const DeleteTodo = async (req, res) => {
    try {
        await  todoListModel.findByIdAndDelete(req.params.id);
        res.sendStatus(200)
    } catch (err) {
        res.json({"message": "Error occured" + err})
    }
}

module.exports = {
    ViewAllTodos,
    AddNewTodos,
    DeleteAll,
    ViewTodo,
    EditTodo,
    DeleteTodo
}