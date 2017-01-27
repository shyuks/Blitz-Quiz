import React, {Component} from 'react';

import NewQuestion from './NewQuestion'
import QuestionEntry from './QuestionEntry';

//need to make axios call to populate list of questions in database (get request on /question)
//need to make axios call to add a new question in database (post request on /question)

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
            <NewQuestion>
            </NewQuestion>
        </div>
      )
  }
}

export default Questions;