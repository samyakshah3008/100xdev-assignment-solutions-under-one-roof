import React, { useState } from "react";

const PropDrilling = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
};

const Count = ({ count }) => {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

const CountRenderer = ({ count }) => {
  return <div>{count}</div>;
};

const Buttons = ({ count, setCount }) => {
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
