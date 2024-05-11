const Task = require('../models/Task');
const mongoose = require('mongoose');

//Get all Tasks
const getTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(201).json(tasks);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

//Get a particular Task 
const singleTask = async(req,res)=>{
    const taskId=req.params.id;
    try {
        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//Create a new Task
const createTask = async (req,res)=>{
    const task = new Task({
        title:req.body.title,
        description:req.body.description
    });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

//Update a Task
const updateTask = async (req,res)=>{
    const taskId = req.params.id;
    const { title, description } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(
          taskId,
          { title, description},
          { new: true }
        );
         if (!task) {
           return res.status(404).json({ message: "Task not found" });
         }
         res.status(200).json(task);
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}

//Delete a Task
const deleteTask = async(req,res)=>{
    const taskId = req.params.id;
    try {
      const task = await Task.findByIdAndDelete(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}

module.exports= {
    getTasks,
    createTask,
    singleTask,
    updateTask,
    deleteTask
}