import React from 'react';

const QuestionsEntry = ({ listOfQuestions, endTest}) => (
  <table>
    <tbody>
      {listOfQuestions.map((question) => (
        <td>{question.body}</td>
        <td>{question.answer}</td>
        </tr> 
      ))}
    </tbody>
  </table>
)

export default QuestionEntry;