
let express = require('express');
let logger = require("morgan");
let path = require("path");
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("short"));

let min=0
let max=100
let resetmin = 0;
let resetmax = 100;
let tries = 0;
let wn = Math.floor(Math.random() * (max-min+1) + min)


let type=0;

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.json())
app.get("/favicon.ico",function(req,res){

})
app.get("/", function(req,res){
	min = resetmin
	max = resetmax
	tries = 0;
	wn = Math.floor(Math.random() * (max-min+1) + min);
	console.log("Range is: " + min + "-" + max + " and the winning number is " + wn)
	console.log(path.resolve(__dirname,"home.html"));
	res.sendFile(path.resolve(__dirname,"home.html"));
});
app.get("/gtn",function(req,res){
	res.sendFile(path.resolve(__dirname,"GTNN.html"))
})

app.get("/geo",function(req,res){
	res.sendFile(path.resolve(__dirname,"geo.html"));
})
app.get("/geotype",function(req,res){
	res.sendFile(path.resolve(__dirname,"geotype.html"))
})
app.get("/setType",function(req,res){
	type=parseInt(req.query.type)
	res.json("Successfully sent")
})
app.post("/getType",function(req,res){
	console.log("returned " + type)
	
	res.json(type)
})

app.get("/calcgeo",function(req,res){
	if(type == 0){
		if(req.query.shape == 1)
			var area = parseInt(req.query.len1) * parseInt(req.query.len2);
		else {
			var area = ((parseInt(req.query.len1) * parseInt(req.query.len2))/2)
		}
		res.json(area);
	}
	else if(type == 1){
		if(req.query.shape == 1)
			var perim = (parseInt(req.query.len1) * 2) + (parseInt(req.query.len2) * 2);
		else{
			var perim = Math.sqrt((parseInt(req.query.len1) * parseInt(req.query.len1)) + (parseInt(req.query.len2) * parseInt(req.query.len2))) + parseInt(req.query.len1) + parseInt(req.query.len2);
		}
		res.json(perim)
	}
})
app.get("/gettype",function(req,res){
	res.json(type);
})


app.get("/guess", function(req,res){
	var guess = req.query.guess;
	console.log("Player guessed: " + guess)
	if(!isNaN(guess)){
		if(guess > max || guess < min){
			console.log("Out of range")
			res.json("Out of range!")
		}
		else if(guess > wn){
			console.log("Too high!")
		 	res.json("Too high!");
			max = parseInt(guess)-1
			tries++;
		}
		else if(guess < wn){
			console.log("Too low!")
			res.json("Too low!")
			min = parseInt(guess)+1
			console.log(min)
			tries++;
		}
		else if(guess == wn){
			console.log("Player got the number!")
			tries++;
			res.json("Player got it in " + tries + " tries.")
		}
	}
	else{
		console.log("Is not a number")
	}
})

app.get("/minmax",function(req,res){
	res.sendFile(path.resolve(__dirname,"minmax.html"));
})
app.get("/getmin",function(req,res){
	res.json(resetmin);
})
app.get("/getmax",function(req,res){
	res.json(resetmax);
	console.log(resetmax  + "resetmax")
})

app.get("/min",function(req,res){
	if(req.query.min >= 0){
		resetmin = parseInt(req.query.min);
		res.json("Set min")
	}
	else {
		res.json("Min cannot be set to: " + req.query.min)
		console.log("Setting min error: Out of bounds")
	}
console.log(req.query.min)
})

app.get("/max", function(req,res){
	if(parseInt(req.query.max) > 0 && parseInt(req.query.max) > resetmin){
		resetmax = parseInt(req.query.max)
		res.json("Set max")
	}
	else{
		res.json("Max cannot be set to: " + req.query.max)
		console.log("Setting max error: Out of bounds")
	}
	console.log(req.query.max)
})

app.get("/getRange", function(req,res){
	res.json("Range: " + min + "-" + max)
})









app.listen(3000,function() {
	console.log("started on port 3000");
});
