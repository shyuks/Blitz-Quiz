import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';
import io from 'socket.io-client';

import LectureBodyComponents from './LectureBodyComponents';
import QuestionsBodyComponents from './lectureQuestions/QuestionsBodyComponents';

class LectureBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: true,
      tests: this.props.tests || [],
      selectedTest: null,
      selectedQuestions: [],
      newQuestions: []
    };
    this.selectLectureHandler = this.selectLectureHandler.bind(this);
    this.handleDeselectLecture = this.handleDeselectLecture.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleSubmitNewQuestion = this.handleSubmitNewQuestion.bind(this);
    this.handleAddLecture = this.handleAddLecture.bind(this);
  }

//=========================================
//            Begin Methods
//=========================================
  //Needs to go to base questions and get the selectedQuestions
  selectLectureHandler (e, id) {
    e.preventDefault();
    let foundTest = null;
    for (let test of this.state.tests) {
      console.log('found');
      console.log(test);
      if (test.id === id) {
        foundTest = test;
      }
    }
    
    /**
     * Socket
     */
    var socket = io.connect('http://localhost:9000');
    socket.emit('active');

    this.setState({
      selectedTest: foundTest,
      selectedQuestions: foundTest.questions
    });


  }

  handleAddQuestion (e) {
    e.preventDefault();
    let questions = this.state.newQuestions.slice();
    questions.push({type: 'Short Answer', body: '', answer: '', status: 'new', isComplete: false});
    this.setState({
      newQuestions: questions
    });
  }

  handleSubmitNewQuestion (e, type, body, answer) {
    e.preventDefault();
    let obj = {
      type: type, 
      body: body, 
      answer: answer, 
      status: 'incomplete', 
      testId: this.state.selectedTest.id};
    axios.post('/test/question', obj).then(res => {
      this.props.addQuestions();
    });
    
    let arr = this.state.selectedQuestions.concat([obj]);

    // updateQuestions(arr); 
    this.setState((prevState, props) => {
      return {
        selectedQuestions: arr,
        newQuestions: []
      };
    });
  }

  handleDeselectLecture(e) {
    e.preventDefault();
    this.setState({selectedTest: null, selectedQuestions: []});
  }

  handleAddLecture(testName) {
    var newTest = {
      testName: testName,
      type: 'Lecture',
      classId: this.props.classId,
      answers: [],
      questions: []
    };
    axios.post('/test/new', newTest).then(res => {
      console.log('New Lecture sent to server!');
    });
    let arr = this.state.tests.slice();
    arr.unshift(newTest);
    this.props.addLecture(arr);
    this.setState({tests: arr, selectedTest: null, selectedQuestions: []});
  }

  componentWillUnmount() {
    console.log('here')
    console.log(this.props.sock);
  }

  componentDidMount() {
    var socket = io.connect('http://localhost:9000');
    console.log('CONNECTED HERE!!!!!!');
    socket.emit('t_connect', this.props.classId);
    this.setState({socket});


  }


//=========================================
//            Render
//=========================================
  render() {
    console.log('HERE ARE THE TESTS!')
    console.log(this.props.tests);
    let item = null;
    if(this.state.selectedTest === null) {
      item = <LectureBodyComponents tests={this.state.tests} 
        selectLectureHandler={this.selectLectureHandler} 
        handleAddLecture = {this.handleAddLecture}/>;
    } else {
      item = <QuestionsBodyComponents questions={this.state.selectedQuestions}
        lecture={this.state.selectedTest}
        newQuestions={this.state.newQuestions}
        handleDeselectLecture={this.handleDeselectLecture}
        handleAddQuestion={this.handleAddQuestion} 
        handleSubmitNewQuestion={this.handleSubmitNewQuestion}
        socket={this.state.socket}
        classId={this.state.classId}/>
}
    return (
      <div>
        {item}
      </div>
    );
  }
}

export default LectureBody;