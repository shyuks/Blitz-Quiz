import React, {Component} from 'react';
import {ListGroupItem, ControlLabel, Button, Glyphicon} from 'react-bootstrap';
import {Form, FormGroup, FormControl} from 'react-bootstrap';
import { submitQuestion } from './../../../actions/teacher_actions';

import './../../../App.css';

class InsertLecture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lectureName: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleQuestionChange(e) {
    this.setState({ lectureName: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.createLecture(this.state.lectureName);
      this.props.revertButton();
    }
  }

  handleAddLecture(testName) {
    var newTest = {
      testName: testName,
      type: 'Lecture',
      classId: this.props.classId,
      answers: [],
      questions: []
    };
    axios.post('/test/new', newTest).then(res => {
      console.log('New Lecture sent to server!');
    });
    let arr = this.state.tests.slice();
    arr.unshift(newTest);
    this.props.addLecture(arr);
    this.setState({tests: arr, selectedTest: null, selectedQuestions: []});
  }

  componentDidMount(){
    this.input.focus();
  }

  render() {
    return (
      <ListGroupItem >
      <Form inline>
          <FormControl
            className="invis"
            type="text"
            inputRef={ref => { this.input = ref; }}
            value={this.state.lectureName}
            onChange={this.handleQuestionChange}
            onKeyPress={(e) => this.handleKeyPress(e)} />
      </Form>
    </ListGroupItem>
    );
  }
}

export default InsertLecture;

//onKeyPress={(e) => this.props.handleAddLecture(e, this.state.lectureName)}