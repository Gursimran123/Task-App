const express = require('express');
const router = express.Router();
const {getTasks,createTask,singleTask,updateTask,deleteTask} = require('../controllers/taskController');
const verifyToken = require("../middleware/authMiddleware");


router.get("/", verifyToken, getTasks);
router.post("/task", verifyToken, createTask);
router.get("/task/:id",verifyToken, singleTask);
router.put("/task/:id",verifyToken, updateTask);
router.delete("/task/:id",verifyToken, deleteTask);

module.exports=router;