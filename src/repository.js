const mongoose = require('mongoose');

//defining schema for db
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean,
    addedDate: Date
})

const Todo = mongoose.model('Todo', todoSchema)

const addTodo=(title)=>{
    const todo= new Todo({title,isDone:false,addedDate:Date.now()})
}

const todos = await Todo.find()
console.log(todos)