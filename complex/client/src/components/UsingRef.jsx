import React, { useEffect, useState, useRef } from "react";

export default function UsingRef() {
  const [name, setName] = useState("");
  // const renderCount = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => setRenderCount((prevRenderCount) => prevRenderCount + 1), []); //rendered infinitly without the [] with the [] it does not work
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <p>My name is {name}</p>
      <p>I have rendered {renderCount} times</p>
      {/* <p>I have rendered {renderCount.current} times</p> */}
    </>
  );
}
