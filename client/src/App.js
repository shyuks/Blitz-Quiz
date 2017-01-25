import React, {Component} from 'react';

import Login from './Login';
import Dashboard from './Dashboard';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    let logged = null;
    this.state.loggedIn ? logged = <Dashboard /> : <Login />;

    return (
      {logged}
    );
  }
}

export default App;