import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const incrementCounter = (evt: any) => {
    evt.preventDefault();
    setCounter((prev) => prev + 1);
  };
  const changeInput = (evt: any) => {
    setInput(evt.target.value);
  };
  const setBtn = () => {
    const intInput = parseInt(input, 10);
    if (!isNaN(intInput)) {
      setCounter(intInput);
    }
  };
  return (
    <>
      <div data-testid="counter-value">{counter}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <input type="number" value={input} onChange={changeInput} />
        <button onClick={setBtn}>Set</button>
      </div>
    </>
  );
}

export default Counter;
