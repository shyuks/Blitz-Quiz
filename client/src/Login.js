import React, {Component} from 'react';

import './App.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
        login: false,
        name: '',
        password: ''
    };
  }


  render() {

    return (
     <form action="/login" method="post" onSubmit={this.handleSubmit.bind(this)}>
        <div>
            <label>Username:</label>
            <input type="text" value={this.state.name} name="username"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={this.state.password} name="password"/>
        </div>
        <div>
            <input type="submit" value="Log In" />
        </div>
    </form>
    );
  }

  handleSubmit(e) {
      e.preventDefault();
  }
  
}

export default Login;