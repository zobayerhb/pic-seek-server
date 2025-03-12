require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// ======= MIDDLE WARE =======
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 Surver runnig on port ${port} ⚡`,
  });
});
app.listen(port, () => {
  console.log(`Surver runnig on port ${port}`);
});
