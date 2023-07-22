import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { habitDone, habitUnDone, habitNone } from "../redux/features/habitSlice";

import DayView from "./DayView";

const HabitTracker = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  const today = new Date();
  const todayDay = today.getDay();

  // Function call after clicking done icon for any day
  const markToDone = (habitId, dayId) => {
    if (dayId > todayDay) {
      alert("You cannot change the status for future days.");
      return;
    }
    dispatch(habitDone({ habitId, dayId }));
  };

  // Function call after clicking undone icon for any day
  const markToUnDone = (habitId, dayId) => {
    if (dayId > todayDay) {
      alert("You cannot change the status for future days.");
      return;
    }
    dispatch(habitUnDone({ habitId, dayId }));
  };

  // Function call after clicking none icon for any day
  const markToNone = (habitId, dayId) => {
    if (dayId > todayDay) {
      alert("You cannot change the status for future days.");
      return;
    }
    dispatch(habitNone({ habitId, dayId }));
  };

  return (
    <div className="habit-tracker">
      {habits.map((habit) => (
        <div className="habit-container" key={habit.id}>
          <h3>{habit.name}</h3>
          <div className="week-log">
            {habit.weekLog.map((day) => (
              <DayView
                key={day.id}
                day={day}
                markToDone={() => markToDone(habit.id, day.id)}
                markToUnDone={() => markToUnDone(habit.id, day.id)}
                markToNone={() => markToNone(habit.id, day.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitTracker;
