var express = require('express');
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname,"/")));
app.listen(8100,function(){

	console.log("School is listing to port 8100");
});