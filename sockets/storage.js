class SocketStorage {
  constructor() {
    this.classrooms = {};
  }

  addClassroom(room, id, roomname) {
    this.classrooms[id] = {
      roomname,
      classId: room.id,
      className: room.className,
      teacherName: room.teacher.lastName,
      photo: room.teacher.photo
    }
    console.log(this.classrooms);
  }

  findStudentClasses(classes) {
    for (let cls of classes){
      console.log('=======================');
      console.log(classes);
    }
  }
}

module.exports = new SocketStorage();