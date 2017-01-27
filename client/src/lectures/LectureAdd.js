import React from 'react';
import {ListGroupItem, Glyphicon} from 'react-bootstrap';

const LectureAdd = (props) => (
  <ListGroupItem href="#" onClick={(e) => props.handleAddLecture()}>
    <Glyphicon glyph="plus" /> Add New Lecture
  </ListGroupItem>
);

export default LectureAdd;