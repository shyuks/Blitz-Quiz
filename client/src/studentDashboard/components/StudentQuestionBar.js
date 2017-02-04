import React, { Component } from 'react';
import {Panel, Media, Tabs, Tab} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleSelectQuestion } from '../.././actions/student_actions'
class StudentQuestionBar extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedClass : null
    }
    this.handleSelectQ = this.handleSelectQ.bind(this);
    this.handleSelectedClass = this.handleSelectedClass.bind(this);
  }

  handleSelectQ(e){
    e.preventDefault();
    this.props.handleSelectQuestion(e.target.value)
  }

  handleSelectedClass(e){
    e.preventDefault();

  }

  render(){
  let length = this.props.questions.length;
  let classes = (
    this.props.classes.map(clss => {
          return <p key={clss.id}>{clss.className}</p>
        })
  )

  let questions = (
      this.state.selectedClass ? 
      (this.props.questions.forEach(question => {
      return <p onClick>{question}</p>}) 
      ) : (<div></div>)
  )

let tabsInstance = (
  <Tabs id="uncontrolled-tab-example">
    {this.props.classes.map((clss, index)=>{
      return <Tab key={index} 
                  eventKey={index} 
                  title={clss.className}>{this.props.questions}</Tab>})}
  </Tabs>
);
  return (
    <Panel>
      <div>
        <div>
      Questions Left: {length}
        </div>
      {tabsInstance}
      </div>
    </Panel>
  );
  }
};

function mapStateToProps(state){
  return {questions : state.studentState.studentQuestions};
}

export default connect(mapStateToProps, { handleSelectQuestion })(StudentQuestionBar);