const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world1");
});

app.listen(PORT, () => console.log(`Listening up to http://localhost:${PORT}`));
