import React from 'react';
import {Accordion, PanelGroup} from 'react-bootstrap';

import StudentBadge from './StudentBadge';
import StudentQuestionBar from './StudentQuestionBar';

import '../.././App.css';

const StudentSidebar = ({firstName, lastName, image, classes}) => (
    <div>
      <PanelGroup className="studentBar">
        <StudentBadge firstname={firstName} lastname={lastName} image={image}/> 
        <StudentQuestionBar classes={classes}/>
      </PanelGroup>
    </div>
);

export default StudentSidebar;