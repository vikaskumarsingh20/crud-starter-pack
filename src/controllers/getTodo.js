const Todo = require('../models/todo');

 exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.find({});
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo retrieved successfully', todo });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving todo', error });
    }
};


exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo retrieved successfully', todo });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving todo', error });
    }
};
