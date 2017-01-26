import React, {Component} from 'react';
const path = require('path');

import './App.css';
const axios = require('axios');
const loginController = require('../../controllers/login.controller')

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
        teacherName: '',
        teacherPassword: '',
        studentName: '',
        studentPassword: ''
    };
  }


  render() {

    return (
        <div className="row">
            <form action="/login" method="post" onSubmit={this.handleSubmitTeacher.bind(this)} className="col-sm-5 col-sm-offset-1">
                <h3> Teacher Login </h3>
                <div>
                    <label>Username:</label>
                    <input name="teacherName" type="text" value={this.state.teacherName} onChange={this.handleChangeTeacher.bind(this)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input name="teacherPassword" type="password" value={this.state.teacherPassword} onChange={this.handleChangeTeacher.bind(this)}/>
                </div>
                <div>
                    <input type="submit" value="Log In" />
                </div>
            </form>
            <form action="/login" method="post" onSubmit={this.handleSubmitStudent.bind(this)} className="col-sm-5 col-sm-offset-1">
                <h3> Student Login </h3>
                <div>
                    <label>Username:</label>
                    <input name="studentName" type="text" value={this.state.studentName} onChange={this.handleChangeStudent.bind(this)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input name="studentPassword" type="password" value={this.state.studentPassword} onChange={this.handleChangeStudent.bind(this)} />
                </div>
                <div>
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </div>    
    );
  }

  handleChangeTeacher(event) {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        });
  }

    handleChangeStudent(event) {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        });
  }

//   handleSubmitTeacher(event) {  
//     console.log("teacher submitted with: ", this.state.teacherName)
//     return axios.post('/login/teacher')
//         .then (function (response) {
//             console.log("does this work?")
//             // return loginController.CHECK_TEACHER()
//         })
//         .catch (function (error) {
//             console.error(error);
//         })
//     }


 handleSubmitStudent(e) {
  }  



}

export default Login;