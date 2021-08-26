import React, { useState } from "react";

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
  return (
    <div>
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
