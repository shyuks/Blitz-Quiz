import React, {Component} from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:9000');

import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import StudentHome from './studentUI/StudentHome';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStudent: true,
      //loggedIn: userSession ? true : false
      loggedIn: false,
      sId: '22',
      tId: '1053'
    };
  }

    teacherAuth (response) {
    this.setState({
      isStudent: false,
      loggedIn: true,
      tId: response.data
    });
  }

  studentAuth () {
    this.setState({
      isStudent: true,
      loggedIn: true
    })
  }

  logout () {
    console.log("looogggin out")
    this.setState({
      loggedIn: false
    })
  }

  render() {
    if(this.state.loggedIn && !this.state.isStudent) {
      return (
          <div>
            <Dashboard tId={this.state.tId} data={this.state.loggedIn} logout={this.logout.bind(this)}/>
          </div>
        );
    } else if(this.state.loggedIn && this.state.isStudent) {
      return (
          <div>
            <StudentHome sId={this.state.sId}/>
          </div>
        );
    } else {
      return (
        <div>
          <Login teacherAuth={this.teacherAuth.bind(this)} 
            studentAuth={this.studentAuth.bind(this)} />
        </div>
      );
    }
  }
}

export default App;