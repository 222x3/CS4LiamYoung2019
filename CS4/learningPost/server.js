let express = require('express');
let logger = require("morgan");
let path = require("path");
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var num = 5;
app.get("/favicon.ico",function(req,res){

})
app.get("/", function(req,res){
	res.sendFile(path.resolve(__dirname,"home.html"));
});
app.post("/setnum", function(sent,send){
  num = sent.body.num
  console.log("num is now " + num)
	send.json({n:num})
})
app.listen(3000,function() {
	console.log("started on port 3000");
});
