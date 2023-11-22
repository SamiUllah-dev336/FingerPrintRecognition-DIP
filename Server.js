const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();

// app.use(cors());
app.use(bodyParser.json());

app.get("/sami", (req, res) => {
  res.status(401).json({
    success: "true",
    message: "It is a sami request",
  });
});

app.listen(4000, () => {
  console.log("App is listen at port 4000");
});
