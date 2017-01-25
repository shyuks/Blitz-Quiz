import React, {Component} from 'react';

import Login from './Login';
import Dashboard from './Dashboard';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true
    };
  }

  render() {
    let logged = null;
    this.state.loggedIn ? logged = <Dashboard /> : logged = <Login />;

    return (
      <div>
        {logged}
      </div>
      
    );
  }
}

export default App;