import React, {Component} from 'react';


import LectureBody from './../lectures/LectureBody';
import StudentList from './StudentList';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: this.props.selectedClass.className,
      teacher: 'Sara H.'
    };
  }

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
      console.log('BLAHBLAHBLAHBLAHHDJKASLDHFKDHFKDS')
      console.log(this.props.selectedClass);
      navigator = (
        <div>
          <LectureBody teacher={this.state.teacher}
            selectedClass={this.props.selectedClass} />
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