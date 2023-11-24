const mongoose = require("mongoose");
const app = require("./ServerApp");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("successful!");
});

app.listen(4000, () => {
  console.log("App is listen at port 4000");
});
