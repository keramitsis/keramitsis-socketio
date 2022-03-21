'use strict';

const express  = require('express');
const socketIO = require('socket.io');
const app    = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Webserver läuft und hört auf Port %d', PORT);
});

app.use(express.static(__dirname + '/public'));

const io = socketIO(server);

io.on('connection', (socket) => {
  //console.log('Client connected');

  socket.on('confetti', (cords) => {
    //console.log(cords);
    io.emit('confetti', cords);
  });

  //socket.on('disconnect', () => console.log('Client disconnected'));
});
