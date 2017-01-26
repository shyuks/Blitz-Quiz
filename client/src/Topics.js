import React, {Component} from 'react';
import TopicEntry from './TopicEntry'

class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: props.class.name,
      listOfTopics: []
    };
  }

  render() {
  	<div>
  		<TopicEntry listOfTopics={this.state.listOfTopics}
  					getTopic={props.getTopic}>
  		</TopicEntry>
    </div>
  }
}

export default Topics;