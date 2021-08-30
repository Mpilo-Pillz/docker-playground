import React, { useState, useCallback } from "react";
import List from "./List";

function UseCallBackPage() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //   const getItems = () => {
  //     // This function gets recreated as a brand new function everytime the component rereders
  //     return [number, number + 1, number + 2];
  //   };

  const getItems = useCallback(() => {
    // This function gets recreated as a brand new function everytime the component rereders
    // wrapping it in useCallback makes it not create a brand new function unless the dependency changes
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallBackPage;
