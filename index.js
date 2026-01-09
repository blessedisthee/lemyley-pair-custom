const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8000;

const server = require("./qr");
const code = require("./pair");

// Parse request bodies (place before routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Your existing API routes
app.use("/server", server);
app.use("/code", code);

// Serve HTML pages
app.get("/pair", (req, res) => {
  res.sendFile(path.join(process.cwd(), "pair.html"));
});

app.get("/qr", (req, res) => {
  res.sendFile(path.join(process.cwd(), "qr.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "main.html"));
});

// IMPORTANT: Bind to 0.0.0.0 on Render
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});

module.exports = app;
