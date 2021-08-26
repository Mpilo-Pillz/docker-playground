import React from "react";
import { Link } from "react-router-dom";
import UsingRefForHTML from "./components/UsingRefForHTML";

const OtherPage = () => {
  return (
    <div>
      <UsingRefForHTML />
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OtherPage;
