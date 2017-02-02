import React, {Component} from 'react';
import axios from 'axios';

import Signup from './Signup';
import Admin from './Admin'
import './App.css';

const Style = {
    backgroundImage: 'url(http://mrsbarkerscs5.files.wordpress.com/2012/10/cropped-cropped-chalkboard-background-e1350959846138.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: '0px',
    left: '0px'
};


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        teacherID: '',
        teacherPassword: '',
        studentID: '',
        studentPassword: '',
        adminPage: false
    };
  }

  handleChangeTeacher(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({[name]: value});
  }

  handleChangeStudent(event) {
    let target = event.target
    let value = target.value
    let name = target.name
    this.setState({
        [name]: value
    });
  }

  handleSubmitTeacher(event) {
    event.preventDefault();
    let stateContext = this;
    axios.post('/login/Teacher', {
        params: {
            Id: this.state.teacherID,
            password: this.state.teacherPassword
        }
    })
    .then((response) => {
        stateContext.setState({
            teacherID: '',
            teacherPassword: ''
        })
        console.log(response)
        stateContext.dashboardViewTeacher(response)
    })
    .catch((error) => {
        console.log(error);
    });
  }

  handleSubmitStudent(event) {
    event.preventDefault();
    let stateContext = this;
    axios.post('/login/Student', {
        params: {
            Id: this.state.studentID,
            password: this.state.studentPassword
        }
    })
    .then((response) => {
        stateContext.setState({
            studentID: '',
            studentPassword: '',
        })
        console.log(response)
        stateContext.dashboardViewStudent(response)
    })
    .catch((error) => {
        console.log(error);
    });
  }

  adminPage () {
      this.setState({
          adminPage: !this.state.adminPage
      })
  }

  dashboardViewTeacher (response) {
    this.props.teacherAuth(response)
  }

  dashboardViewStudent () {
      this.props.studentAuth()
  }

  render() {
    const { errors } = this.state
    if (this.state.adminPage) {
        return (
            <div>
                <Admin adminPage={this.adminPage.bind(this)}/>
            </div>
        )
    }
    return (
        <div style = {Style}>
            <div className="row">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="modal-header">
                            <h3> BlitzQuiz</h3>
                            <button type="submit" value="Register" className="login loginmodal-submit btn btn-primary" onClick={this.adminPage.bind(this)} > Admin </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container ">
                        <h1 className="text-center"> Teacher Login </h1>
                        <form onSubmit={this.handleSubmitTeacher.bind(this)}>
                            <input name="teacherID" type="text" value={this.state.teacherID} onChange={this.handleChangeTeacher.bind(this)} placeholder="UserID"/>
                            <input name="teacherPassword" type="password" value={this.state.teacherPassword} onChange={this.handleChangeTeacher.bind(this)} placeholder="Password"/>
                            <input type="submit" value="Login" className="login loginmodal-submit btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container">
                        <h1 className="text-center"> Student Login </h1>
                        <form onSubmit={this.handleSubmitStudent.bind(this)}>
                            <input name="studentID" type="text" value={this.state.studentID} onChange={this.handleChangeStudent.bind(this)} placeholder="UserID" />
                            <input name="studentPassword" type="password" value={this.state.studentPassword} onChange={this.handleChangeStudent.bind(this)} placeholder="Password" />
                            <input type="submit" value="Login" className="login loginmodal-submit btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
