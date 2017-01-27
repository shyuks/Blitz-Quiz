import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';

import LectureAdd from './LectureAdd';
import LectureComponents from './LectureComponents';

//need to make axios call to populate list of topics = testnames in database (get request on /topic)
//need to make axios call to add a new topic = testname in database (post request on /topic)

//RESTRUCTURE TO SCC
class LectureBodyComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology 100'
    };
  }

  render() {
    return(
      <div>
        <ListGroup>
          <LectureAdd handleAddLecture={this.props.handleAddLecture} />
        </ListGroup>
        <LectureComponents tests={this.props.tests}
          selectLectureHandler={this.props.selectLectureHandler}/>
      </div>
    );
  }
}

export default LectureBodyComponents;