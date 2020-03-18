var express = require("express");
var http = require("http");
var app = express();
app.use(function(req,res,next){
   console.log("In comes a request to: " + req.url);
   next();
});
app.get("/",function(req,res) {
  console.log("get slash");
    res.end("Welcome to the home page");
});
app.get("/favicon.ico",function(req,res) {
  console.log("get favicon");
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
});
app.get("/about",function(req,res) {
  console.log("get about");
    res.end("Welcome to the about page");
});
app.use(function(req,res){
  console.log("error");
	res.statusCode = 404;
    res.end("Error! File not found");
});
http.createServer(app).listen(3000);
