import React, { useEffect, useMemo, useState } from "react";

function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //   const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    // cashes the value of slow function
    // only recalls it if the number changes hence we have it as a dependency
    return slowFunction(number);

    // give you a performance boost at the cost of memory
  }, [number]);

  //   const themeStyles = {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    //this kept printing becuase there style refered to a new object even if the values were the same
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling Slow function");
  for (let i = 0; i <= 1000000; i++) {}
  console.log("Done calling");
  return num * 2;
}

export default UseMemoPage;
