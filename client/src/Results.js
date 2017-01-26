import React, {Component} from 'react';
import ResultsGraphs from './ResultsGraphs';
import QuestionsStats from './QuestionsStats';
import StudentsScores from './StudentsScores';


class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: props.tropic.name
    };
  }

  render() {
  	<div>
  		<ResultsGraphs>
  		</ResultsGraphs>

  		<QuestionsStats>
  		</QuestionsStats>

  		<StudentsScores>
  		</StudentsScores>
  	</div>    
	}
}

export default Results;