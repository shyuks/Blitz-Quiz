import React, {Component} from 'react';

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

  render() {
    if(this.state.loggedIn && !this.state.isStudent) {
      return (
          <div>
            <Dashboard tId={this.state.tId}/>
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