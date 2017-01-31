const Storage = require('./storage');
const studentSocket = require('./student');
/**
 * Teacher sockets in LectureBody
 */

module.exports = (client) => {
  client.on('t_connect', classId => {
    client.join(classId);
    console.log('Room ' + classId + ' has been created!');

    Storage.setRoom(classId);
    console.log('THIS IS THE ROOM!: ' + classId);
    client.emit('newRoom', Storage.getRooms());
  });

  /**
   * This Handles the teacher sending the question to the student
   */
  client.on('askQuestion', item => {
    console.log('Teacher has sent a question-------->');
    Storage.setCurrentQuestion(item.classId, item.question);
    client.to('3').emit('getQuestion', item.question);
  });



  setInterval( () => {
    client.to('lonely').emit('check', Storage.getRooms());
  }, 3000)

  studentSocket(client);
  client.on('disconnect', () => {
    console.log('user has disconnected');
  });
};