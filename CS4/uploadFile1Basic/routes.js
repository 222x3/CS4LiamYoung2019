
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/index.html");
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/public/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});

module.exports = router;

