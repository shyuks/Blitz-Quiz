import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import LectureBodyComponents from './LectureBodyComponents';
import QuestionsBodyComponents from './lectureQuestions/QuestionsBodyComponents';

class LectureBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology 100',
      teacher: props.teacher,
      tests: [
        {id: 1, testName: 'Bugs', type: 'Lecture', isComplete: false},
        {id: 2, testName: 'Horses', type: 'Lecture', isComplete: false},
        {id: 3, testName: 'Mammals', type: 'Lecture', isComplete: true}
      ],
      selectedLecture: null,
      selectedQuestions: []
    };
    this.selectLectureHandler = this.selectLectureHandler.bind(this);
    this.handleDeselectLecture = this.handleDeselectLecture.bind(this);
  }

  //Needs to go to base questions and get the selectedQuestions
  selectLectureHandler (e, id) {
    e.preventDefault();
    for (let test of this.state.tests) {
      if (test.id === id) {
        this.setState({selectedLecture: test});
      }
    }
    this.setState({
      selectedQuestions: [
        {id: 5, type: 'Short Answer', body: 'How many legs do ants have?', answer: 'Six legs', status: 'complete'}, 
        {id: 6, type: 'Short Answer', body: 'What is the role of the Queen Ant?', answer: 'Lead their colony', status: 'incomplete'},
        {id: 7, type: 'Short Answer', body: 'What is the best Ant?', answer: 'Spicyboi', status: 'incomplete'}
        ]
    });
  }

  handleDeselectLecture (e) {
    e.preventDefault();
    this.setState({selectedLecture: null, selectedQuestions: []});
  }

  render() {
    let item = null;
    if(this.state.selectedLecture === null) {
      item = <LectureBodyComponents tests={this.state.tests} 
              selectLectureHandler={this.selectLectureHandler} />;
    } else {
      item = <QuestionsBodyComponents questions={this.state.selectedQuestions}
                lecture={this.state.selectedLecture}
                handleDeselectLecture={this.handleDeselectLecture}/>
    }

    return (
      <div>
        {item}
      </div>
    );
  }
}

export default LectureBody;