const Task = require('../models/Task');

// GET all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// POST create new task
exports.createTask = async (req, res) => {
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.status(201).json(savedTask);
};

// DELETE a task
exports.deleteTask = async (req, res) => {
  const deleted = await Task.findByIdAndDelete(req.params.id);
  res.json(deleted);
};
