import React, { useState } from "react";

function useCount({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  return { count, setCount };
}

export default useCount;
