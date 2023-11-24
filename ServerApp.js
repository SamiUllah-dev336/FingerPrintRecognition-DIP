const express = require("express");
const StudentRoutes = require("./StudentApi/StudentRoutes");
// now start API'S
const app = express();
app.use(express.json());

app.use("/Student/Api", StudentRoutes);
module.exports = app;
