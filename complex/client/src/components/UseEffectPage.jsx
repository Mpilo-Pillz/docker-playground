import React, { useState, useEffect } from "react";

const UseEffectPage = () => {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);

  console.log("out side use effect");

  useEffect(() => {
    console.log("resourceTypeChanged");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default UseEffectPage;
