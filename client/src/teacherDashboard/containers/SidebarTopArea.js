import React, { Component } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
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
    padding: '25px',
    fontSize: '1.5em',
    height: '100px'
  },
};


class SidebarTopArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: this.props.tData.classes[0]
    };

    this.selectClass = this.selectClass.bind(this);
  }

  selectClass(newClass) {
    this.setState({
      selectedClass: newClass
    })
  }

  render() {
    let currentClass = this.state.selectedClass;
    let classes = this.props.tData.classes;

    let populateClasses = (someClass, i) => {
    if(someClass === currentClass){
      return(
      <MenuItem
        eventKey={someClass.id}
        key={i}
        active>
          {someClass.className}
        </MenuItem>
      );
      } else {
        return(
          <MenuItem
            eventKey={someClass.id}
            key={i}
            onClick={() => {this.selectClass(someClass);}}>
              {someClass.className}
            </MenuItem>
        )
      }
    }

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
        {this.props.children}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { tData: state.teacherState.tData }
}

export default connect(mapStateToProps)(SidebarTopArea);