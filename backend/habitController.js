const Habit = require('./habitModel');

// Create a new habit in the database
exports.createHabit = async (req, res) => {
  try {
    const { name } = req.body;
    const today = new Date();
    let day = today.getDate() - today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();

    const newHabit = new Habit({
      name,
      weekLog: [
        { day: 'Sunday', dd: day, mm: month, yyyy: year, isDone: '' },
        { day: 'Monday', dd: day + 1, mm: month, yyyy: year, isDone: '' },
        { day: 'Tuesday', dd: day + 2, mm: month, yyyy: year, isDone: '' },
        { day: 'Wednesday', dd: day + 3, mm: month, yyyy: year, isDone: '' },
        { day: 'Thursday', dd: day + 4, mm: month, yyyy: year, isDone: '' },
        { day: 'Friday', dd: day + 5, mm: month, yyyy: year, isDone: '' },
        { day: 'Saturday', dd: day + 6, mm: month, yyyy: year, isDone: '' },
      ],
    });

    await newHabit.save();
    res.status(201).json({ success: true, data: newHabit });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create habit' });
  }
};
