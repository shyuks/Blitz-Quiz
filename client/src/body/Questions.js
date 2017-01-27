import React, {Component} from 'react';

import QuestionEntry from './QuestionEntry';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: 'Ants',
      listOfQuestions: [{body: 'How many legs do ants have?', answer: 'Six legs'}, {body: 'What is the role of the Queen Ant?', answer: 'Lead their colony'}]
    };
  }

  render() {
      return(
        <div>
            <QuestionEntry listOfQuestions={this.state.listOfQuestions}>
            </QuestionEntry>
        </div>
      )
  }
}

export default Questions;