import React, { useContext, useState } from "react";
import { CountContext } from "./context";

const PropDrilling = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
        <Buttons />
      </CountContext.Provider>
    </div>
  );
};

const Count = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

const CountRenderer = () => {
  const count = useContext(CountContext);

  return <div>{count}</div>;
};

const Buttons = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default PropDrilling;
