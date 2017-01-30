import React from 'react';

import QuestionComponent from './QuestionComponent';
import QuestionAddButton from './QuestionAddButton';

const QuestionComponents = (props) => {
  console.log('WE MADE IT TO QBODYCOMPONENTS: ');
  console.log(props);
  const components = props.questions.map((question, i) => {
    console.log('-----------------')
    console.log(question)
    return (
       <QuestionComponent question={question}
        handleSubmitNewQuestion={props.handleSubmitNewQuestion}
        number={i}
        key={i} />
    )});

  const newComponents = props.newQuestions.map((question, i) => {
    return (
       <QuestionComponent question={question}
        handleSubmitNewQuestion={props.handleSubmitNewQuestion}
        number={i}
        key={i} />
    )});
  
  return (
    <div>
      {components}
      {newComponents}
      <QuestionAddButton handleAddQuestion={props.handleAddQuestion}/>
    </div>
  );
};

export default QuestionComponents;