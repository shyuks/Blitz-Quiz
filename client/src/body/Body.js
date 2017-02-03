import React, {Component} from 'react';
import axios from 'axios';

import LectureBody from './../lectures/LectureBody';
import StudentList from './StudentList';
import Dashboard from './Dashboard/Main.js'


class Body extends Component {
  constructor(props) {
    super(props);
    // console.log('Inside body component', props)
    this.state = {
      tests: this.props.selTests || [],
      students: this.props.selStudents || [],
      currentClass: this.props.currentClass
    };
    this.addLecture = this.addLecture.bind(this);
    this.addQuestions = this.addQuestions.bind(this);
  }

  addLecture(arr) {
    this.setState({tests: arr});
  }

  addQuestions() {
    axios.get('/test/' + props.tId).then(res => {
      for(let obj of res.data.classes){
        if(obj.id === this.props.classId){
          this.setState({
            tests: obj.tests
          });
        }
      }
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      tests: nextProps.selTests || [],
      students: nextProps.selStudents || [],
      currentClass: nextProps.currentClass
    })
  }

  render() {
    let navigator = null;

    if(this.props.navigation === ''){
      navigator = (
        <div>
          <Dashboard />
        </div>
      )
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
            addQuestions={this.addQuestions} 
            sock={this.props.classId}/>
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