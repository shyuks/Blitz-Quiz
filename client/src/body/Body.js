import React, {Component} from 'react';


import LectureBody from './../lectures/LectureBody';
import StudentList from './StudentList';


class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'state 1',
      currentClass: this.props.selectedClass.className,
      teacher: 'Sara H.'
    };

    this.testStateChange = this.testStateChange.bind(this);
  }

  testStateChange() {
    this.setState({
      test: 'state 2'
    });
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
      navigator = (
        <div>
          <LectureBody selectedClass={this.props.selectedClass} />
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