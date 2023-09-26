const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.send({msg:"hi"});
});

server.get('/home', (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(8080);
