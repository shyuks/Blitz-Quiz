import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { adminLogin, adminLogout } from '../../actions/admin_actions';
import { Link } from 'react-router';
// import Login from './Login'
// import Signup from './Signup'

const Style = {
    backgroundImage: 'url(http://mrsbarkerscs5.files.wordpress.com/2012/10/cropped-cropped-chalkboard-background-e1350959846138.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: '0px',
    left: '0px'
};

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
            // signupView: false
        }
    }

    static contextTypes = {
        router: PropTypes.object
    };

    handleSubmitAdmin(event) {
      event.preventDefault();
      let stateContext = this;
      axios.post('/login/Admin', {
          params: {
              email: this.state.email,
              password: this.state.password
          }
      })
      .then((response) => {
        if (response.data) {
            this.props.adminLogin(response.data);
            this.context.router.push('/register');
        }   else {
            console.log("Unsuccessful Admin Login");
        }
        //   stateContext.setState({
        //       email: '',
        //       password: ''
        //     //   signupView: true
        //   })
        //   console.log('Admin Login Successful!')
      })
      .catch((error) => {
          console.log(error);
      });
    }

    handleChangeAdmin(event) {
      let target = event.target;
      let value = target.value;
      let name = target.name;
      this.setState({[name]: value});
    }

    //add button for back to login

    render() {
        // if (this.state.signupView) {
        //     return (
        //         <div>
        //             <Signup/>
        //         </div>
        //     )
        // }
        return(
            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container ">
                        <h1 className="text-center"> Admin Login </h1>
                        <form onSubmit={this.handleSubmitAdmin.bind(this)}>

                            <input name="email" type="text" value={this.state.email} onChange={this.handleChangeAdmin.bind(this)} placeholder="email"/>

                            <input name="password" type="password" value={this.state.password} onChange={this.handleChangeAdmin.bind(this)} placeholder="Password"/>

                            <input type="submit" value="Login" className="login loginmodal-submit btn btn-primary"/>
                        </form>
                    </div>
                    <Link to='/' className="login loginmodal-submit btn btn-primary">
                      Login Portal
                    </Link>
                </div>
            </div>
        )
    }
}

export default connect(null, { adminLogin })(Admin);
