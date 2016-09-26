var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("Hello World");
});

var server = app.listen(process.env.PORT || 8888, function () {
    console.log("Listening on port %s...", server.address().port);
});
