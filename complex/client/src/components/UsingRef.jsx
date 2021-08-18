import React, { useState } from "react";

export default function UsingRef() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <p>My name is {name}</p>
    </>
  );
}
