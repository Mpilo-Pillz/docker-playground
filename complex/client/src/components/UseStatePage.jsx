import React, { useEffect, useState } from "react";

function countInitial() {
  console.log("initCOuntRan");
  return 4;
}
function reRenders() {
  console.log("Rerenders");
  return 0;
}
const UseStatePage = () => {
  const [count, setCount] = useState(reRenders());
  const [altCount, setAltCount] = useState(() => countInitial());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function multiplyCount() {
    setAltCount((prevCount) => prevCount * 2);
  }

  function divideCount() {
    setAltCount((prevCount) => prevCount / 2);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <hr />
      <button onClick={divideCount}>/</button>
      <span>{altCount}</span>
      <button onClick={multiplyCount}>*</button>
    </div>
  );
};

export default UseStatePage;
