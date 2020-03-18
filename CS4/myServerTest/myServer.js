var http = require("http");

function requestHandler(req,res){
  console.log("In comes a request to: " + req.url)

  if(req.url === 'favicon.ico'){
    res.writeHead(200, {'Content-Type': 'image/x-icon'})
    res.end()
    console.log("favicon requested")
    return;
  }
  else if(req.url === "/"){
    res.end("Welcome to the home page")
  }
  else if(req.url === "/about"){
    res.end("Welcome to the about page")
  }
  else{
    res.end("Error, not a real path")
  }
}


var server = http.createServer(requestHandler)
server.listen(3000)
