const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there, this is runnin go from a docker container");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
