// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

import React, { useMemo, useState } from "react";
import { findFactorial } from "./helper";

const Assignment1 = () => {
  const [userInputValue, setUserInputValue] = useState("");
  const [inputValue, setInputValue] = useState(0);

  const expensiveCalculation = useMemo(() => {
    return findFactorial(userInputValue);
  }, [userInputValue]);

  const changeHandler = (e) => {
    setUserInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="type any number"
        value={userInputValue}
        onChange={changeHandler}
      />
      <p>
        Factorial of {userInputValue} is: {expensiveCalculation}{" "}
      </p>
      {/* even if we change this, use memo function wont be called  */}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Assignment1;
