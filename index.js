require("dotenv").config();
const app = require("./src/app");
const { connectDB } = require("./src/utils/connectDB");
const port = process.env.PORT || 5000;

connectDB()
  .then((res) => {
    app.listen(port, () => {
      console.log(`🚩 Surver runnig on port ${port}`);
      console.log("🚩 Connect MongoDB");
    });
  })
  .catch((error) => console.log(error.message));
