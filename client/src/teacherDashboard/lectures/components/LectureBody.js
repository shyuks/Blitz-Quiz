import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';

import LectureList from './LectureList';
import InsertLecture from './InsertLecture';

import './../../../App.css';

class LectureBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderAdd: true
    };
    this.handleNewClick = this.handleNewClick.bind(this);
    this.revertButton = this.revertButton.bind(this);
  }

  handleQuestionChange(e) {
    this.setState({ lectureName: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.handleAddLecture(this.state.lectureName);
      this.props.revertButton();
    }
  }

  handleNewClick(e) {
    e.preventDefault();
    this.setState({renderAdd: false});
  }

  revertButton() {
    this.setState({renderAdd: !(this.state.renderAdd)});
  }

  render() {
    let button =  <ListGroupItem href="#" onClick={this.handleNewClick}>
                    <Glyphicon glyph="plus" /> Add New Lecture
                  </ListGroupItem>

    let txtBox = <InsertLecture 
                    handleAddLecture={this.props.handleAddLecture}
                    revertButton={this.revertButton}
                  />

    let component = (this.state.renderAdd) ? button : txtBox; 

    return(
      <div>
        <ListGroup>
          {component}
        </ListGroup>
        <Lecture tests={this.props.tests}
          selectLectureHandler={this.props.selectLectureHandler}/>
      </div>
    );
  }
}

export default LectureBody;