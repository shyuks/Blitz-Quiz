import React, {Component} from 'react';
import Lecture from './Lecture';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology',
      teacher: 'Sara H.'
    };
  }


  render() {

    return (
    	<div>
            <Lecture>
            </Lecture>
    	</div>
    );
  }
}

export default Body;