var express = require("express");
var app = express();

app.use(express.static(__dirname + "/dist/bookstore-app/"));

app.all("*", (req, res) => {
	res.sendFile(__dirname + "/dist/bookstore-app/");
});

app.listen("3000", (req, res) => {
	console.log("Application is running on port 3000");
});