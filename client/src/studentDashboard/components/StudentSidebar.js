import React from 'react';
import {Accordion, PanelGroup} from 'react-bootstrap';

import StudentBadge from './StudentBadge';
import StudentQuestionBar from './StudentQuestionBar';

import '../.././App.css';

const StudentSidebar = () => (
    <div>
      <PanelGroup className="studentBar">
        <StudentBadge/> 
        <StudentQuestionBar/>
      </PanelGroup>
    </div>
);

export default StudentSidebar;