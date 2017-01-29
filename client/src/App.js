import React, {Component} from 'react';
import io from 'socket.io-client';

import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import StudentHome from './studentUI/StudentHome';

import './App.css';
let userSession;
console.log(userSession)
class App extends Component {

  constructor(props) {
    super(props);

    // var socket = io('http://localhost:9000');
    // socket.on('connect', () => {
    //   console.log('connected at client');
    // });

    this.state = {
      isStudent: true,
      loggedIn: userSession ? true : false
    };
  }

  render() {
    let logged = null;
    this.state.loggedIn ? logged = <Dashboard /> : logged = <Login teacherAuth = {this.teacherAuth.bind(this)} studentAuth = {this.studentAuth.bind(this)} />;

    return (
      <div>
        {logged}
      </div>
      
    );
  }

  teacherAuth (response) {
    this.setState({
      isStudent: false,
      loggedIn: true
    })
    console.log(response)
    userSession = response.data
    console.log(userSession)
  }

  studentAuth () {
    this.setState({
      isStudent: true,
      loggedIn: true
    })
  }



}

export default App;