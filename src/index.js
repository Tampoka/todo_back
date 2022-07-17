const express = require('express');
const bodyParser = require('body-parser');
const todos = require('./todos-router');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Todos');

//defining schema for db
    const todoSchema = new mongoose.Schema({
        title: String,
        isDone: Boolean,
        addedDate: Date
    })

    const Todo = mongoose.model('Todo', todoSchema)

    const todo1 = new Todo({title: "Buy milk", isDone: false, addedDate: Date.now()})

    await todo1.save()

    const todos = await Todo.find()
    console.log(todos)

app.get('/', function (req, res) {
    res.send('homepage');
})

app.use('./todos', todos)

//not-matching path
app.get("*", function (req, res) {
    res.sendStatus(404);
});
app.listen(5000)