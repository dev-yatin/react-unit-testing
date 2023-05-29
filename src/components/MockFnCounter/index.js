import React from "react";

function MockFnCounter({ count, handleIncrement, handleDecrement }) {
  return (
    <div>
      <div>{count}</div>
      <div>{handleIncrement && <button onClick={handleIncrement}>Increment</button>}</div>
      <div>{handleDecrement && <button onClick={handleDecrement}>Decrement</button>}</div>
    </div>
  );
}

export default MockFnCounter;
