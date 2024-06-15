import React, { useRef, useState } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export default function Assignment7() {
  const [forceRender, setForceRender] = useState(0);

  const numberOfTimesReRendered = useRef(0);

  const handleReRender = () => {
    // Update state to force re-render
    setForceRender(Math.random());
  };

  numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

  return (
    <div>
      <p>
        This component has rendered {numberOfTimesReRendered.current} times.
      </p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
