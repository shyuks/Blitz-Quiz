import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';
import io from 'socket.io-client';

import LectureBodyComponents from './LectureBodyComponents';
import QuestionsBodyComponents from './lectureQuestions/QuestionsBodyComponents';



class LectureBody extends Component {
  constructor(props) {
    super(props);
    
    console.log(props);
    let conn = props.sock.teacher.lastName + props.sock.id;
    

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

  componentDidUpdate() {       
      console.log('======================================');
      console.log('TIME FOR A RERENDER!!!!!!');
      console.log(this.state.tests)
      console.log('======================================');
  }

  componentWillUnmount() {
    console.log('here')
    console.log(this.props.sock);
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
        handleSubmitNewQuestion={this.handleSubmitNewQuestion}/>
}
    return (
      <div>
        {item}
      </div>
    );
  }
}

export default LectureBody;