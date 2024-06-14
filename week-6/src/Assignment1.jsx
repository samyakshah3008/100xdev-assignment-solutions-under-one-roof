// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

import React, { useState } from "react";
import { findFactorial } from "./helper";

const Assignment1 = () => {
  const [userInputValue, setUserInputValue] = useState("");
  let answer = 0;
  const changeHandler = (e) => {
    setUserInputValue(e.target.value);
    answer = findFactorial(e.target.value);
  };

  //   const expensiveCalculation = useMemo(findFactorial(userInputValue), [
  //     userInputValue,
  //   ]);

  return (
    <div>
      <input
        type="number"
        placeholder="type any number"
        value={userInputValue}
        onChange={changeHandler}
      />
      <p>
        Factorial of {userInputValue} is: {answer}{" "}
      </p>
    </div>
  );
};

export default Assignment1;
