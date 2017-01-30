const Storage = require('./storage');

module.exports = (client) => {
  client.on('findClasses', classes => {
    console.log('TRIGGERED: findClasses!')
    let classe = Storage.findStudentClasses()
  });
};