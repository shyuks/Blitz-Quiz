import React, {Component} from 'react';
import Topics from './Topics';
import Questions from './Questions';
import Results from './Results';


class Lecture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'Biology 100',
      teacher: props.teacher,
      topic: 'Ants',
      finished: true

    };
  }

  getTopic(newTopic){
    this.setState({topic: newTopic})
  }

  endTest(){
    this.setState({finished: true})
  }

  render() {

    if(this.state.topic === null && !this.state.finished){
      return (
          <div>
            <Topics>
            </Topics>
          </div>
        );
    } else if (this.state.topic !== null && !this.state.finished){
      return (
        <div>
          <Questions>
          </Questions>
        </div>
      );
    } else if (this.state.topic !== null && this.state.finished){
      return(
        <div>
          <Results>
          </Results>
        </div>
      );
    }
  }
}

export default Lecture;