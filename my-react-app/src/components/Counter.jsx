import React from "react";

export const Counter = (props) => {
  const { setCounter, counter, children } = props;
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {children}
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};
