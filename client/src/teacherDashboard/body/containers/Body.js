import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import LectureBody from './../../lectures/LectureBody';
import StudentList from './StudentList';
import BodyDashboard from '../components/BodyDashboard'


class Body extends Component {
  constructor(props) {
    super(props);
    // console.log('Inside body component', props)
    this.state = {
      // tests: this.props.selTests || [],
      // students: this.props.selStudents || [],
      // currentClass: this.props.currentClass
    };
    this.addLecture = this.addLecture.bind(this);
    this.addQuestions = this.addQuestions.bind(this);
  }

  addLecture(arr) {
    // this.setState({tests: arr});
  }

  addQuestions() {
    axios.get('/test/' + this.props.tId).then(res => {
      for(let obj of res.data.classes){
        if(obj.id === this.props.classId){
          // this.setState({
          //   tests: obj.tests
          // });
        }
      }
    });
  }

  // componentWillReceiveProps(nextProps){
  //   this.setState({
  //     tests: nextProps.selTests || [],
  //     students: nextProps.selStudents || [],
  //     currentClass: nextProps.currentClass
  //   })
  // }

  render() {
    const classRoom = {
      id: this.props.selectedClass.id,
      className: this.props.selectedClass.className,
      teacher: this.props.tData.teacher
    }

    let navigator = null;

    if(this.props.destination === ''){
      navigator = (
        <div>
          <BodyDashboard />
        </div>
      )
    } else if (this.props.destination === 'Students') {
      navigator = (
        <div>
          <StudentList currentClass={this.props.selectedClass}/>
        </div>
      );
    } else if (this.props.destination === 'Lectures') {
      navigator = (
        <div>
          <LectureBody
            tests={this.props.selectedClass.tests}
            addLecture={this.addLecture}
            classId={this.props.selectedClass.classId}
            addQuestions={this.addQuestions} 
            sock={classRoom}/>
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

function mapStateToProps(state) {
  return {
    tId: state.teacherState.tId,
    tData: state.teacherState.tData,
    destination: state.teacherState.destination,
    selectedClass: state.teacherState.selectedClass
  };
}

export default connect(mapStateToProps)(Body);