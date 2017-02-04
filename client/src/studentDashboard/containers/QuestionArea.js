import React, {Component} from 'react';
import {PageHeader, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleStudentAnswer } from '../../actions/student_actions'
import axios from 'axios';

import '../.././App.css';

class QuestionArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerBody: ''
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleAnswerChange(e) {
    e.preventDefault();
    this.setState({answerBody: e.target.value});
  }

  handleAnswer() {
    let answer = {
      StudentsId: this.props.sId,
      QuestionsId: this.props.question[0].id,
      answerBody: this.state.answerBody,
      isCorrect : 'Pending'
    };

    axios.post('/', answer)
    .then(result => {
      this.props.handleStudentAnswer();
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render() {
      // let question = this.props.question.body + '  ';
      // let type = this.props.question.type;
      return (
        <div className="questionArea">
          <PageHeader>{'question'}<small>{'type'}</small></PageHeader>
          <Form>
            <FormGroup>
              <FormControl type="text"
                value={this.state.answerBody}
                onChange={this.handleAnswerChange} />
              <Button onClick={this.handleAnswer}>
                Submit
              </Button>
            </FormGroup>
          </Form>
        </div>
      );
  }
}
export default QuestionArea;