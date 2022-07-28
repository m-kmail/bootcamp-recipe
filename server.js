const express = require("express");
const urllib = require("urllib");
const app = express();

const port = 8080;

const path = require("path");
const api = require("./server/routes/api");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use("/", api);

app.listen(port, function () {});
