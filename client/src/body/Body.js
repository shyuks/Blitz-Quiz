import React, {Component} from 'react';
import Lecture from './Lecture';
import AvailableStudents from './AvailableStudents';
import ImportedStudents from './ImportedStudents';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology',
      teacher: 'Sara H.',
      studentView: true
    };
  }


  render() {
    if(this.state.studentView) {
      return (
        <div>
          <ImportedStudents />
          <AvailableStudents />
        </div>
      )
    } else {
      return (
    	  <div>
          <Lecture teacher={this.state.teacher} />
    	  </div>
      );
    }
  }


}

export default Body;