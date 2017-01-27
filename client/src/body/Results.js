import React, {Component} from 'react';
import ResultsGraphs from './ResultsGraphs';
import QuestionsStats from './QuestionsStats';
import StudentsScores from './StudentsScores';


class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: 'Ants',
      studentData: [90, 85, 80, 100, 95],
      questionData: [100, 95, 85, 90]
    };
  }

  render() {
      return(
  	    <div>
          <h3>Results by Question</h3>
          <ResultsGraphs questionData={this.state.questionData}>
          </ResultsGraphs>

          <h3>Lowest to Highest per centage of correct answers</h3>
          <QuestionsStats>
          </QuestionsStats>

          <h3>Results by Student</h3>
          <StudentsScores>
          </StudentsScores>
  	    </div>
      )
	}
}

export default Results;