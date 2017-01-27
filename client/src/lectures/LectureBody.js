import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import LectureBodyComponents from './LectureBodyComponents';

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
  }

  selectLectureHandler (e, id) {
    e.preventDefault();
    for (let test of this.state.tests) {
      console.log(test);
      if (test.id === id) {
        this.setState({selectedLecture: test});
      }
    }
  }

  render() {
    let item = null;
    if(this.state.selectedLecture === null) {
      item = <LectureBodyComponents tests={this.state.tests} 
              selectLectureHandler={this.selectLectureHandler} />;
    }
    return (
      <div>
        {item}
      </div>
    );
  }
}

export default LectureBody;