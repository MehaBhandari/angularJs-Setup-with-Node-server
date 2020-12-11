// Http is used to create Server to take up the requests
var http = require('http');

// Express act as a routing Engine 
var express = require('express');

// Used as a templating engine
var vash = require('vash');

// Express is initialized to carry ot routing process
var app = express();

// Server is created and express is used as a middleware to configure the routes
var server = http.createServer(app);

//app.set("view engine", "vash");
app.set('views', './views');
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

var routeController = require("./controller/routeController");

routeController.initializeRouting(app);

var dataController = require('./controller/dataController');
dataController.userDataArr(app);

// Apllication is made to listen Http request at port 8080
app.listen(8080);

