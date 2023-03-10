import React, { createContext, useState } from "react";
const FitnessItem = createContext();

const FitnessContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <FitnessItem.Provider
      value={{
        completed,
        workout,
        calories,
        minutes,
        setCompleted,
        setWorkout,
        setCalories,
        setMinutes,
      }}
    >
      {children}
    </FitnessItem.Provider>
  );
};

export  {FitnessContext,FitnessItem}