class SocketStorage {
  constructor() {
    this.rooms = []
    this.currentQuestions = {}
  }
 
  getRooms() {
    return this.rooms;
  }

  setRoom(id){
    this.rooms.push(id);
  }

  setCurrentQuestion (id, question) {
    this.currentQuestions[id] = question;
  }
}

module.exports = new SocketStorage();