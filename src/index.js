const express = require('express');
const bodyParser = require('body-parser');
const todos = require('./todos-router');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//connecting to db through mongoose
main().catch(err => console.log(err));

app.get('/', function (req, res) {
    res.send('homepage');
})

app.use('./todos',todos)

//not-matching path
app.get("*", function (req, res) {
    res.sendStatus(404);
});
app.listen(5000)