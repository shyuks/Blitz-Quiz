import React, {Component} from 'react';
import axios from 'axios';

import LectureBody from './../lectures/LectureBody';
import StudentList from './StudentList';


class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tests: this.props.selTests || [],
      students: this.props.selStudents || [],
      currentClass: 'Biology 100'
    };
    this.addLecture = this.addLecture.bind(this);
    this.addQuestions = this.addQuestions.bind(this);
  }

  addLecture(arr) {
    this.setState({tests: arr});
  }

  addQuestions() {
    axios.get('/test/1053').then(res => {
      for(let obj of res.data.classes){
        if(obj.id === this.props.classId){
          this.setState({
            tests: obj.tests
          });
        }
      }
    });
  }

  // componentDidUpdate() {       
  //     console.log('======================================');
  //     console.log('TIME FOR A RERENDER!!!!!!');
  //     console.log('======================================');
  // }

  render() {
    let navigator = null;

    if(this.props.navigation === ''){
      navigator = null;
    } else if (this.props.navigation === 'Students') {
      navigator = (
        <div>
          <StudentList currentClass={this.state.currentClass}/>
        </div>
      );
    } else if (this.props.navigation === 'Lectures') {
      navigator = (
        <div>
          <LectureBody selectedTest={this.state.selectedTest}
            tests={this.state.tests}
            addLecture={this.addLecture}
            classId={this.props.classId}
            addQuestions={this.addQuestions} />
    	  </div>
      );
    }
    return (
      <div>
        {navigator}
      </div>
    );
  }
}

export default Body;