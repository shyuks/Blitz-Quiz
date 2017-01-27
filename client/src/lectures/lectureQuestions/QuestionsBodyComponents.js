// import React, {Component} from 'react';
// import {ListGroup} from 'react-bootstrap';

// import NewQuestion from './NewQuestion'
// import QuestionEntry from './QuestionEntry';

// //need to make axios call to populate list of questions in database (get request on /question)
// //need to make axios call to add a new question in database (post request on /question)

// class QuestionsBodyComponents extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentTopic: 'Ants',
//       listOfQuestions: [
//         {body: 'How many legs do ants have?', answer: 'Six legs'}, 
//         {body: 'What is the role of the Queen Ant?', answer: 'Lead their colony'}
//         ]
//     };
//   }

//   render() {
//       return(
//         <div>
//           <ListGroup>

//           </ListGroup>
//             <QuestionEntry listOfQuestions={this.state.listOfQuestions}>
//             </QuestionEntry>
//             <NewQuestion>
//             </NewQuestion>
//         </div>
//       )
//   }
// }

// export default QuestionsBodyComponents;

import React from 'react';
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import QuestionHeader from './QuestionHeader';
import QuestionComponents from './QuestionComponents';

const QuestionsBodyComponents = (props) => {
  return (
    <div>
      <ListGroup>
        <QuestionHeader lecture={props.lecture}
          handleDeselectLecture={props.handleDeselectLecture}/>
      </ListGroup>
      <QuestionComponents questions={props.questions} />
    </div>
  );
};

export default QuestionsBodyComponents;