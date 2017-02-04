import React from 'react';
import {ListGroup} from 'react-bootstrap';

import Lecture from './Lecture';

const LectureList = (props) => {
  const components = props.tests.map((test, i) => 
    <LectureComponent test={test}
      selectLectureHandler={props.selectLectureHandler}
      key={i} />
  );
  return (
    <ListGroup>
      {components}
    </ListGroup>
  );
};

export default LectureList;