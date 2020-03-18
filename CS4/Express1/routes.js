var express = require('express')
var path = require('path')
var router = express.Router()

router.get("/",function(request,response){
  console.log("Router get function to /")
  response.sendFile(path.resolve(__dirname,"public/views/home.html"));
})

module.exports = router;
