const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 8080;
const api = require("./routes/api");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api", api);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "AngularAuth", "dist", "index.html")); // relative path
});

app.listen(PORT, function () {
  console.log("Server running on localhost: " + PORT);
});
