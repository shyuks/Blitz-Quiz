const appInst = require('./server');

const app = require('express')();
const server = require('http').createServer(appInst.app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User has connected!'); 
  socket.on('disconnect', () => {
    console.log('User has disconnected.');
  }) 
});


