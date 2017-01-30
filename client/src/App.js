import React, {Component} from 'react';

import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import StudentHome from './studentUI/StudentHome';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isTeacher: true,
      //loggedIn: userSession ? true : false
      loggedIn: false
    };
  }

    teacherAuth (response) {
    this.setState({
      isStudent: true,
      loggedIn: true
    });
  }

  studentAuth () {
    this.setState({
      isStudent: true,
      loggedIn: true
    })
  }

  render() {
    if(this.state.loggedIn && this.state.isTeacher) {
      return (
          <div>
            <Dashboard />
          </div>
        );
    } else if(this.state.loggedIn && !this.state.isTeacher) {
      return (
          <div>
            <StudentHome />
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