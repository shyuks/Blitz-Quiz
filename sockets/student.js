const Storage = require('./storage');

module.exports = (socket) => {
  socket.on('newbie', (message) => {
  
    socket.join('3');
    console.log('STUDENT HAS JOINED 3');
    socket.to('3').emit('init', Storage.getRooms());
  })


};