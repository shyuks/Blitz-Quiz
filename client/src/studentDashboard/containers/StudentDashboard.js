import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import io from 'socket.io-client';

import StudentSidebar from '../components/StudentSidebar';
import QuestionArea from './QuestionArea';

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      id: 22,
      testId: null,
      avail: [],
      firstName: '',
      lastName: '',
      image: '',
      questions: [],
      answers: [],
      testName: '',
      type: '',
      selectedClass: '3',
      myClasses: [],
      possibleClasses: []
    };
  }

  handleAnswer(e, answerBody, qId) {
    e.preventDefault();
    let answer = {
      StudentsId: this.state.id,
      QuestionsId: qId,
      answerBody: answerBody,
      isCorrect: 'Pending'
    }

    let newQuestions = this.state.questions.slice(1);
    this.setState({questions: newQuestions});
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

  componentDidMount() {
    var socket = io.connect('http://localhost:9000');
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
      console.log(question);
      this.setState({
        questions: [question]
      })
    });

    axios.get('/api/info/' + this.props.sId).then(response => {
      let a = response.data;
      let allClasses = [];
      for (let item of a.classes){
        allClasses.push(item.id);
      }
      this.setState({
        id: this.props.sId,
        firstName: a.student.firstName,
        lastName: a.student.lastName,
        image: a.student.photo,
        myClasses: allClasses
        });
    }); 
  }

  render() {
    let question = null;

    if(this.state.questions.length > 0) {
      question = (
        <QuestionArea question={this.state.questions[0]}
          handleAnswer={this.handleAnswer.bind(this)}/>
      );
    }

    return (
      <div>
      <Grid fluid={true}>
        <Row>
          <Col xs={4} sm={4} md={4} lg={3}>
            <StudentSidebar questions={this.state.questions}/>
          </Col>
          <Col xs={8} sm={8} md={8} lg={9}>
            {question}
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default StudentDashboard;