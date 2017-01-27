import React, {Component} from 'react';
import TopicEntry from './TopicEntry'
import NewTopic from './NewTopic'

//need to make axios call to populate list of topics = testnames in database (get request on /topic)
//need to make axios call to add a new topic = testname in database (post request on /topic)

class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology 100',
      listOfTopics: ['Biology 100', 'Physics 100', 'Algebra 100']
    };
  }

  render() {
      return(
            <div>
                <TopicEntry listOfTopics={this.state.listOfTopics}>
                </TopicEntry>
                <NewTopic>
                </NewTopic>
            </div>
      )
  }
}

export default Topics;