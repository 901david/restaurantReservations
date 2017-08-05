// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var uniqueId = 1;

var tables = [];
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "../view.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../reserve.html"));
});
app.get("/api/tables", function(req, res) {
  res.json(currentReservations);
});
app.get("/api/list", function(req, res) {
  res.json(currentWait);
});

var currentReservations = [{name: "Chris", phone: "3032960017", email:  "fake@fake.com"}];
var currentWait = [{name: "Mike", phone: "3032960017", email:  "fake@fake.com"}];

  app.post("/api/new", function(req, res) {
    var newReservation = req.body;
    // newReservation.routeName = newReservation.name;

    // console.log(newReservation);

    currentReservations.push(newReservation);
    //
    res.json(currentReservations);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
