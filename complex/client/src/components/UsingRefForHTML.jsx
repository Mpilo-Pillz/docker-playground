import React, { useEffect, useState, useRef } from "react";

export default function UsingRefForHTML() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
      {/* <p>I have rendered {renderCount.current} times</p> */}
    </>
  );
}
