import React from 'react';

const QuestionEntry = ({ listOfQuestions }) => (
  <table>
    <tbody>
      {listOfQuestions.map((question) => (
        <div>
          <tr>{question.body}</tr>
          <tr>{question.answer}</tr>
        </div>
      ))}
    </tbody>
  </table>
);

export default QuestionEntry;