const todoListController = require('../controllers/todoListController');
const todoListRoute = (app) => {
    app.route('/todos')
        .get(todoListController.ViewAllTodos)
        .post(todoListController.AddNewTodos)
        .delete(todoListController.DeleteAll)
    app.route('/todo/:id')
        .get(todoListController.ViewTodo)
        .put(todoListController.EditTodo)
        .delete(todoListController.DeleteTodo)
}
module.exports = todoListRoute