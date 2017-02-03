import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import { adminLogout } from '../../actions/admin_actions';
import { connect } from 'react-redux';

// import Login from './Login'

import '../../App.css';

const Style = {
    backgroundImage: 'url(http://wallpapercave.com/wp/o0a73QI.jpg)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
};

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstNameTeacher: '',
            lastNameTeacher: '',
            passwordTeacher: '',
            confirmPasswordTeacher: '',

            firstNameStudent: '',
            lastNameStudent: '',
            passwordStudent: '',
            confirmPasswordStudent: ''

            // loginView: false
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

  static contextTypes = {
      router: PropTypes.object
  }

    // loginView () {
    //     this.setState({
    //         loginView: !this.state.loginView
    //     })
    // }
    componentWillMount(){
      console.log(this.props.adminState);
      if(!this.props.adminState){
        this.context.router.push('/admin');
      }
    }
    handleChangeTeacherRegister(event) {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        });
    }

    handleChangeStudentRegister(event) {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        });
    }

    handleSubmitTeacherRegister(event) {
        event.preventDefault();
        let stateContext = this;
        axios.post('/registerTeacher', {
            params: {
                firstNameTeacher: this.state.firstNameTeacher,
                lastNameTeacher: this.state.lastNameTeacher,
                passwordTeacher: this.state.passwordTeacher,
                confirmPasswordTeacher: this.state.confirmPasswordTeacher
            }
        })
        .then((response) => {
            stateContext.setState({
                firstNameTeacher: '',
                lastNameTeacher: '',
                passwordTeacher: '',
                confirmPasswordTeacher: ''
            })
            // stateContext.loginView()
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleSubmitStudentRegister(event) {
        event.preventDefault();
        let stateContext = this;
        axios.post('/registerStudent', {
            params: {
                firstNameStudent: this.state.firstNameStudent,
                lastNameStudent: this.state.lastNameStudent,
                passwordStudent: this.state.passwordStudent,
                confirmPasswordStudent: this.state.confirmPasswordStudent
            }
        })
        .then((response) => {
            stateContext.setState({
                firstNameStudent: '',
                lastNameStudent: '',
                passwordStudent: '',
                confirmPasswordStudent: ''
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    handleAdminLogout(){
      this.props.adminLogout();
      this.context.router.push('/')
    }

  render() {
  // if (this.state.loginView) {
  //     return (
  //         <div>
  //             <Login loginView={this.loginView.bind(this)}/>
  //         </div>
  //     )
  // }
    return (
        <div style={Style}>
            <div className="row">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="modal-header">
                            <h3> BlitzQuiz</h3>
                            <button  
                              className="login loginmodal-submit btn btn-primary" 
                              onClick={this.handleAdminLogout.bind(this)} > Logout </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container">
                        <h1> Teacher Registration </h1>
                        <form onSubmit={this.handleSubmitTeacherRegister.bind(this)}>

                            <input name="firstNameTeacher" type="text" value={this.state.firstNameTeacher} onChange={this.handleChangeTeacherRegister.bind(this)} placeholder="First name"/>

                            <input name="lastNameTeacher" type="text" value={this.state.lastNameTeacher} onChange={this.handleChangeTeacherRegister.bind(this)} placeholder="Last name"/>

                            <input name="passwordTeacher" type="password" value={this.state.passwordTeacher} onChange={this.handleChangeTeacherRegister.bind(this)} placeholder="Password"/>

                            <input name="confirmPasswordTeacher" type="password" value={this.state.confirmPasswordTeacher} onChange={this.handleChangeTeacherRegister.bind(this)} placeholder="Confirm Password"/>

                            <input type="submit" value="Register" className="login loginmodal-submit btn btn-primary"/>

                        </form>
                    </div>
                </div>
            </div>

            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container">
                        <h1> Student Registration </h1>
                        <form onSubmit={this.handleSubmitStudentRegister.bind(this)}>

                            <input name="firstNameStudent" type="text" value={this.state.firstNameStudent} onChange={this.handleChangeStudentRegister.bind(this)} placeholder="First name"/>

                            <input name="lastNameStudent" type="text" value={this.state.lastNameStudent} onChange={this.handleChangeStudentRegister.bind(this)} placeholder="Last name"/>

                            <input name="passwordStudent" type="password" value={this.state.passwordStudent} onChange={this.handleChangeStudentRegister.bind(this)} placeholder="Password"/>

                            <input name="confirmPasswordStudent" type="password" value={this.state.confirmPasswordStudent} onChange={this.handleChangeStudentRegister.bind(this)} placeholder="Confirm Password"/>

                            <input type="submit" value="Register" className="login loginmodal-submit btn btn-primary"/>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps({adminState}){
  return { adminState }  
}
export default connect(mapStateToProps, { adminLogout })(Register);
