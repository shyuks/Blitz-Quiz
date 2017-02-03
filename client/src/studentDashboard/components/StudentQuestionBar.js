import React, { Component } from 'react';
import {Panel, Media} from 'react-bootstrap';
import { connect } from 'react-redux';

class StudentQuestionBar extends Component {
  constructor(props){
    super(props)
  }


  render(){
    let length = this.props.questions.length;
  return (
    <Panel>
      <p>Questions Left: {length}</p>
      <p>Time Left: --:--</p>
    </Panel>
  );
  }
};

function mapStateToProps(state){
  return {questions : state.studentState.studentQuestions};
}

export default connect(mapStateToProps)(StudentQuestionBar);