const express = require('express');
const createTodo = require('../controllers/createTodo');
const {getTodo ,getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/todoUpdate');
const {deleteTodo} = require('../controllers/deleteTodo');


const router = express.Router();

// Route to create a new todo
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

module.exports = router;