const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const habitController = require('./habitController');

const app = express();
const PORT = process.env.PORT || 5000;

// Replace <password> with your actual MongoDB Atlas password
const password = 'Saurabh31';

// Construct the MongoDB Atlas connection string
const uri = `mongodb+srv://Saurabh26:${password}@cluster0.ov6djoa.mongodb.net/test?retryWrites=true&w=majority`;

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Connection error:', error);
});

app.use(cors());
app.use(express.json());

// Add a new habit to the database
app.post('/api/habits', habitController.createHabit);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
