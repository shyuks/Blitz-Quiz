import React from 'react';

const QuestionsStats = (props) => {
    let questionsInDescendingOrder = [{question: "What's the role of the queen ant?", perCentage: 80}, {question: 'How many legs does the ant have?', perCentage: 100}]
  return (
    <table>
    <tbody>
      {questionsInDescendingOrder.map((question) => (        
        <tr>
        <td>{question.question}</td>
        <td>{question.perCentage}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default QuestionsStats;