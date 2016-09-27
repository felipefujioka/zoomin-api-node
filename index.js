var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "config/firebaseApp.json",
  databaseURL: "https://zoomin-4c0b1.firebaseio.com/"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.post("/rides", function(req,res){
  console.log("post on rides")
  var user =  req.body.user
  var geo = req.body.geo
  var db = firebase.database();
  var ref = db.ref("rides/" + user);
  ref.set(geo)
  res.send("posted successfully")
});

app.get("/me", function(req, res){
  console.log(req.query);
  var fb = require("./models/facebook/facebook-api");
  fb.getUser(req.query.token);
  res.send("OK")
});

var server = app.listen(process.env.PORT || 8888, function () {
    console.log("Listening on port %s...", server.address().port);
});
