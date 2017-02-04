import React, {Component, PropTypes} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { studentReceivingQuestion, studentLogout } from '../.././actions/student_actions';
import Sidebar from 'react-sidebar';

import StudentSidebar from '../components/StudentSidebar';
import QuestionArea from './QuestionArea';

class StudentDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testId: null,
      avail: [],
      firstName: '',
      lastName: '',
      image: '',
      answers: [],
      testName: '',
      type: '',
      selectedClass: '3',
      myClasses: [],
      possibleClasses: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  findMyRooms(all, mine) {
    let temp = [];
    for (let i of all) {
      for (let j of mine) {
        if(i === j) {
          temp.push(i);
        }
      }
    }
    this.setState({
      allRooms: temp
    })
  }

  selectRoom(id, socket) {
    this.setState({
      room: id
    })
  }

  componentWillMount(){
    if(!this.props.sId){
      this.context.router.push('/');
    }
  }

  componentDidMount() {
    var socket = io.connect('/');
    socket.on('connect', () => {
      socket.emit('newbie');
    });

    socket.on('init', rooms => {
      console.log(rooms);
    });

    socket.on('allRooms', arr => {
      console.log('ya')
    });

    socket.on('getQuestion', question => {
      this.props.studentReceivingQuestion(question);
    });

    axios.get('/api/info/' + this.props.sId).then(response => {
      
      let a = response.data;
      this.setState({
        firstName: a.student.firstName,
        lastName: a.student.lastName,
        image: a.student.photo,
        myClasses: a.classes
        });
    }); 
  }

  handleUserLogout(){
    this.props.studentLogout();
    this.context.router.push('/');
  }

  render() {
    return (
      <div>
      <Grid fluid={true}>
        <Row>
          <Col xs={4} sm={4} md={4} lg={3}>
            <StudentSidebar 
            firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            image={this.state.image} 
            classes={this.state.myClasses}/>
          </Col>
          <Col xs={8} sm={8} md={8} lg={9}>
            { this.props.sQuestion.hasOwnProperty('body') 
            ? <QuestionArea question={this.props.sQuestion}/> 
            : <div></div>}
          </Col>
        </Row>
        <button  
        className="login loginmodal-submit btn btn-primary" 
         onClick={this.handleUserLogout.bind(this)} > Logout </button>
      </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {sId : state.studentState.sId, sQuestion : state.studentState.sQuestion };
}

export default connect(mapStateToProps, 
  {studentReceivingQuestion, studentLogout})(StudentDashboard);