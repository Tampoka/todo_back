const express = require('express');
const bodyParser = require('body-parser');
const todos = require('./todos-router');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Todos');

app.get('/', function (req, res) {
    res.send('homepage');
})

app.use('./todos', todos)

//not-matching path
app.get("*", function (req, res) {
    res.sendStatus(404);
});
app.listen(5000)