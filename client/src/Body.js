import React, {Component} from 'react';
import Lecture from './Lecture';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: props.class.name,
      teacher: 'Some Teacher info gotten from login'
    };
  }


  render() {

    return (
    	<div>
    	<Lecture class={this.state.currentClass}
    			 teacher={this.state.teacher}>
    	</Lecture>
    	</div>
    );
  }
}

export default Body;