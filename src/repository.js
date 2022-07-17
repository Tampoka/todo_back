const mongoose = require('mongoose');

//defining schema for db
import mongoose from 'mongoose';

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