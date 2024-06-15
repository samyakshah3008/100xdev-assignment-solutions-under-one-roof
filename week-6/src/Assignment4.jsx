import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export default function Assignment4() {
  const [count, setCount] = useState(0);

  // Your code starts here

  const cachedHandleIncrement = useCallback(function handleIncrement() {
    setCount((count) => count + 1);
  }, []);
  const cachedHandleDecrement = useCallback(function handleDecrement() {
    setCount((count) => count - 1);
  }, []);
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={cachedHandleIncrement}
        onDecrement={cachedHandleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
