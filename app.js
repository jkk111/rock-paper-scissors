var http = require("http");
var express = require("express");
var app = express();
var PORT = 80;
app.use(express.static("static"));
var server = http.createServer(app).listen(PORT, function() {
  console.info("Rock Paper Scissors listening on port: %d", PORT);
});
