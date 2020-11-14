import express from 'express';
import http from 'http';
import Controller from './controller/controller';

var server = express();

server.use(express.static("static"));

const httpServer = http.createServer(server);

const controller = new Controller(server);

controller.router();


httpServer.listen(80,"0.0.0.0",()=>{
    console.log("Listen");
})