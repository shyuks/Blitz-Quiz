import React, {Component} from 'react';

import LectureBody from './../lectures/LectureBody';
import AvailableStudents from './AvailableStudents';
import ImportedStudents from './ImportedStudents';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology',
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
          <ImportedStudents />
          <AvailableStudents />
        </div>
      );
    } else if (this.props.navigation === 'Lectures') {
      navigator = (
        <div>
          <LectureBody teacher={this.state.teacher} />
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