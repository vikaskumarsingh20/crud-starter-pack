const express = require('express');
const app = express();
const dbConnect = require('./src/config/database');
const todoRoutes = require('./src/routes/todo');
require('dotenv').config();

// Connect to MongoDB
dbConnect();

//middleware
app.use(express.json());

// Routes
app.use('/api/v1', todoRoutes);

// Default route
app.get('/', (req, res) => {
    res.send(`<h1>This is the default route</h1>`);
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

