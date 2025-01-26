const todo = require('../models/todo');

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTodo = await todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully', todo: deletedTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error });
    }
};