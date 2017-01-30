import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';

import LectureBodyComponents from './LectureBodyComponents';
import QuestionsBodyComponents from './lectureQuestions/QuestionsBodyComponents';

class LectureBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: true,
      currentClass: 'Biology 100',
      teacher: props.teacher,
      tests: this.props.selectedClass.tests || [],
      selectedLecture: null,
      selectedQuestions: this.props.selectedClass,
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
    console.log('IN HERE!');
    console.log('the id: ', id);
    let foundTest = null;
    for (let test of this.state.tests) {
      if (test.id === id) {
        console.log('FOUND: ');
        console.log(test);
        foundTest = test;
      }
    }
    this.setState({
      selectedLecture: foundTest,
      selectedQuestions: foundTest.questions
    });
  }

  handleAddQuestion (e) {
    e.preventDefault();
    let questions = this.state.newQuestions.slice();
    questions.push({type: 'Short Answer', body: '', answer: '', status: 'new'});

    this.setState({
      newQuestions: questions
    });
  }

  handleSubmitNewQuestion (e, type, body, answer) {
    e.preventDefault();
    let obj = {type: type, body: body, answer: answer, status: 'incomplete'};
    let arr = this.state.selectedQuestions.concat([obj]); 
    this.setState((prevState, props) => {
      return {
        selectedQuestions: arr,
        newQuestions: []
      };
    });
  }

  handleDeselectLecture(e) {
    e.preventDefault();
    this.setState({selectedLecture: null, selectedQuestions: []});
  }

  handleAddLecture(testName) {
    console.log('Hello!')
    let arr = this.state.tests.slice();
    arr.unshift({id: 4, testName: testName, type: 'Lecture', isComplete: false});
    this.addLectureToServer(testName);
    this.setState({tests: arr});
  }

  addLectureToServer(name) {
      axios.post('/test', {
      testName: name,
      type: 'Lecture',
      timeAllowed: 0,
      classId: this.props.selectedClass.id
    }).then(res => {
      console.log(res);
    });
  }

//=========================================
//            Render
//=========================================
  render() {
    let item = null;

    if(this.state.selectedLecture === null) {
      item = <LectureBodyComponents tests={this.state.tests} 
        selectLectureHandler={this.selectLectureHandler} 
        handleAddLecture = {this.handleAddLecture}/>;
    } else {
      item = <QuestionsBodyComponents questions={this.state.selectedQuestions}
        lecture={this.state.selectedLecture}
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