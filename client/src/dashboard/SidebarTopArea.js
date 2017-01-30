import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

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
    padding: '25px',
    fontSize: '1.5em',
    height: '100px'
  },
};


const SidebarTopArea = (props) => {
  let currentClass = props.class;
  let classes = props.classes;
  let populateClasses = (someClass, i) => {
   if(someClass === currentClass){
    return(
    <MenuItem eventKey={someClass.id} key={i} active> {someClass.className} </MenuItem>
    );
    } else {
      return(
        <MenuItem eventKey={someClass.id} key={i} onClick={() => {props.selectClass(someClass);}}> {someClass.className} </MenuItem>
      )
    }
  }
  console.log('THIS IS THE SELECTED: ');
  console.log(currentClass);
  const rootStyle = styles.root;
  return (
    <div style={rootStyle}>
      <div style={styles.header}>
        <DropdownButton title={currentClass.className}
          bsSize="large"
          id="dropdown-size-large">

          {classes.map((someClass, i) => (
           populateClasses(someClass, i)
         ))}
          
        </DropdownButton>
      </div>
      {props.children}
    </div>
  );
};

export default SidebarTopArea;