const express = require("express");
const app = express();
const dotnet = require("dotenv");
dotnet.config();

app.get("/", (req, res) => {
  res.send("this is home page");
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Server Started on PORT ${port}`));
