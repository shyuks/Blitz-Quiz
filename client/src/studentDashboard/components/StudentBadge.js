import React from 'react';
import {ListGroupItem, Panel, Media, Image} from 'react-bootstrap';

const StudentBadge = ({firstname, lastname, image}) => {
  return (
    <Panel>
      <Media>
        <Media.Left>
          <Image width={64} 
                   height={64} 
                   src={image}
                   rounded/>
        </Media.Left>
         <Media.Body>
            <Media.Heading>{lastname + ', ' + firstname}</Media.Heading>
          </Media.Body>
      </Media>
    </Panel>
  );
};

export default StudentBadge;