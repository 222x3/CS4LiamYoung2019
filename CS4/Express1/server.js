var express = require("express")
var http = require('http')
var logger = require('morgan')
var path = require('path')
var routes = require('./routes')
var app = express()
let publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath))
app.use('/favicon.ico',express.static('favicon.png'))
app.use(logger("short"))
app.use(express.static(publicPath))
app.use('/',express.static('./'))
app.use(routes)
app.listen(3000);
