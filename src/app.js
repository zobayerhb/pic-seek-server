require("dotenv").config();
const express = require("express");
const logger = require("./middleware/logger");
const app = express();
const cors = require("cors");

// ======= MIDDLE WARE =======
app.use(cors());
app.use(express.json());
app.use(logger);

// playground

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 Surver runnig on port 5000 ⚡`,
  });
});

module.exports = app;
