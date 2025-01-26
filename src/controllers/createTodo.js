const Todo = require('../models/todo');

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({
            title,
            description
        });

        const savedTodo = await newTodo.save();
        res.status(201).json({ message: 'Todo created successfully', todo: savedTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo', error });
    }
};

module.exports = createTodo;


