import React from 'react';
import {Media, Image} from 'react-bootstrap';
import { connect } from 'react-redux';

//=========================================
//            Styles
//=========================================
const styles = {
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '17px',
    height: '100px',
    width: '260px'
  },
};


const SidebarPersonal = (props) => {
  let teacher = props.tData.teacher;
  const rootStyle = styles.root;
  console.log('re-rendering in sidebarpersonal');
  return (
    <div style={rootStyle}>
      <div style={styles.header}>
        <Media>
          <Media.Left>
            <Image width={64} 
                   height={64} 
                   src={teacher.photo}
                   rounded/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{teacher.firstName} {teacher.lastName}</Media.Heading>
            <p>{props.tId}</p>
          </Media.Body>
        </Media>
      </div>
      {props.children}
    </div>
  );
};

function mapStateToProps(state) {
  return { tId: state.teacherState.tId, tData: state.teacherState.tData }
}

export default connect(mapStateToProps)(SidebarPersonal);