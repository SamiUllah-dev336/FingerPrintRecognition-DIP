const express = require("express");

const app = express();

app.get("/sami", (req, res) => {
  res.status(200).json({
    success: "true",
    message: "It is a sami request",
  });
});

app.listen(4000, () => {
  console.log("App is listen at port 4000");
});
