const mongoose = require('mongoose');

//defining schema for db
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean,
    addedDate: Date
})

const Todo = mongoose.model('Todo', todoSchema)

const getTodos = () => {
    return Todo.find()
}

const addTodo=(title)=>{
    const todo= new Todo({title,isDone:false,addedDate:Date.now()})
}

const deleteTodo=(id)=>{
    return Todo.deleteOne({_id:id})
}