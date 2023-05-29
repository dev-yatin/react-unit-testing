import React, { useEffect, useState, useRef } from "react";

function FindBy() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    if (!isLoggedIn && !timer.current) {
      (timer as any).current = setTimeout(() => {
        setIsLoggedIn((prev) => !prev);
      }, 1001);
    }
  });
  return <div>{isLoggedIn && <button>Allow User</button>}</div>;
}

export default FindBy;
