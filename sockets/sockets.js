const Storage = require('./storage');
/**
 * Teacher sockets in LectureBody
 */


const room = require('./room');

module.exports = (client) => {
  client.on('t_createClass', room => {
    
    let roomname = room.teacher.lastName + room.id;
    console.log('Room ' + roomname + ' has been created!');
    Storage.addClassroom(room, client.id, roomname);
    client.join(roomname);
  });

  room(client);



  client.on('disconnect', () => {
    console.log('user has disconnected');
  });
};