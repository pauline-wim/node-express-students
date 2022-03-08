const express = require("express");
const app = express();

// ROUTES

app.get("/", (_req, res) => {
  res.send("Start");
});

// ERROR
app.get("*", (req, res) => {
  res.status(404).send("Page not found - 404");
});

app.listen(8000, () => console.log("Listening..."));
