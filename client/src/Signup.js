import React, {Component} from 'react';
import axios from 'axios';

import './App.css';


class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        password: ''
    };
  }

  makeCallToServer() {
      
  }


  render() {

    return (
        <div>
            <div className="row">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="modal-header">
                            <h3> BlitzQuiz</h3>
                            <button type="submit" value="Login" className="login loginmodal-submit btn btn-primary" onClick={this.loginView.bind(this)} > Login </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container">
                        <h1> Teacher Registration </h1>
                        <form onSubmit={this.handleSubmitRegister.bind(this)}>
                            <input name="firstName" type="text" value={this.state.teacherID} onChange={this.handleChangeRegister.bind(this)} placeholder="First name"/>
                            <input name="lastName" type="text" value={this.state.teacherID} onChange={this.handleChangeRegister.bind(this)} placeholder="Last name"/>
                            <input name="teacherPassword" type="password" value={this.state.teacherPassword} onChange={this.handleChangeRegister.bind(this)} placeholder="Password"/>
                            <input type="submit" value="Register" className="login loginmodal-submit btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }

    loginView (event) {
      this.props.signupView()
    }

  handleChangeRegister(event) {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        });
  }

  handleSubmitRegister(event) {  

  }





}

export default Signup;