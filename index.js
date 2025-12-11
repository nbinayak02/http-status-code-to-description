const express = require("express");
const statusCodes = require("./statusCodes");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json(statusCodes);
});

app.get("/:code", (req, res) => {
  const code = req.params.code;

  if (isNaN(code)) {
    return res.status(422).json("Error: Status code should be a number");
  }

  const statusCode = statusCodes.filter(
    (statusCode) => statusCode.code === Number(code)
  );

  return res.json(...statusCode);
});

app.listen(5000, () => console.log("Server started"));
