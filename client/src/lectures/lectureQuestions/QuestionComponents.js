import React from 'react';

import QuestionComponent from './QuestionComponent';

const QuestionComponents = (props) => {
  const components = props.questions.map((question, i) => 
    <QuestionComponent question={question}
      number={i}
      key={i} />
  );
  return (
    <div>
      {components}
    </div>
  );
};

export default QuestionComponents;