// habitModel.js
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weekLog: [
    {
      day: String,
      dd: Number,
      mm: Number,
      yyyy: Number,
      isDone: {
        type: String,
        enum: ['Done', 'Not done', 'None'],
        default: 'None',
      },
    },
  ],
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
