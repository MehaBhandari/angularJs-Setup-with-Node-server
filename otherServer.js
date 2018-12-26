var http = require("http");

var express = require("express");

var appRouter = express();

appRouter.get("/api/userdata", function(req, res) {
    res.send({
        user: "Mayank",
        age: 10
    });
})

appRouter.get("/api/userdata/Meha", function(req, res) {
    res.send({
        user: "Meha",
        age: 10
    });
})

var server = http.createServer(appRouter);

server.listen(4000);