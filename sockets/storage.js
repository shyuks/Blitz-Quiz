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
}

module.exports = new SocketStorage();