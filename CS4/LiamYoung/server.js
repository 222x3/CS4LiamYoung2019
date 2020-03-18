
let express = require('express');
let logger = require("morgan");
let path = require("path");
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("short"));
app.use(express.json())
var calcType = "simple"
app.get("/favicon.ico",function(req,res){

})
app.get("/", function(req,res){
	res.sendFile(path.resolve(__dirname,"home.html"));
});
app.get("/simpOrComp",function(req,res){
	res.sendFile(path.resolve(__dirname,"simpOrComp.html"));
})
app.post("/setType",function(req,res){
	calcType = req.body.type;
	res.json(calcType);
	console.log("Set to: " + calcType)
})
app.get("/getType",function(req,res){
	res.json(calcType);
})
app.get("/operation", function(req, res){
	let op = req.query.op
	let a = parseInt(req.query.num1)
	let b = parseInt(req.query.num2)
	if(op == "add")
		res.json(a + "+" + b + "=" + (a+b))
	else if(op == "mul")
		res.json(a + "*" + b + "=" + (a*b))

	else if(op == "fac")
		res.json(a + "!" + "=" + factorial(a))
	else if(op == "pow"){
		res.json(a + "^" + b + "=" + Math.pow(a,b))
	}
});
function factorial(x)
{
  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);

}
app.listen(3000,function() {
	console.log("started on port 3000");
});
