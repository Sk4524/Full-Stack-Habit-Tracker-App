import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HabitTracker from "./HabitTracker";
import { habitDone, habitUnDone, habitNone } from "../redux/features/habitSlice";

const HabitTrackerView = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  // Function to handle toggling habit status
  const handleToggleStatus = (habitId, dayId, status) => {
    switch (status) {
      case "Done":
        dispatch(habitUnDone({ habitId, dayId }));
        break;
      case "Not done":
        dispatch(habitNone({ habitId, dayId }));
        break;
      case "None":
        dispatch(habitDone({ habitId, dayId }));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Habit Tracker</h2>
      <HabitTracker habits={habits} handleToggleStatus={handleToggleStatus} />
    </div>
  );
};

export default HabitTrackerView;
