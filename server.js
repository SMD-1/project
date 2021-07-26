const express = require("express");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log(`Listening up to http://localhost:${PORT}`));