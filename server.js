const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db_uri = 'mongodb://localhost:27017/todo_db';
mongoose.connect(db_uri) .then(() => console.log('MongoDB Connected!')) .catch(error => console.log(error));


const app = express();
var port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Setup Routes (API - Link)
const todoListRoute = require('./api/routes/todoListRoute');
todoListRoute(app)

app.listen(port, function() {
    console.log('API server started at port: ' + port);
});
