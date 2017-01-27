import React from 'react';

const TopicEntry = ({ listOfTopics }) => (
  <table>
    <tbody>
      {listOfTopics.map((topic) => (        
        <tr>{topic}</tr>
      ))}
    </tbody>
  </table>
)

export default TopicEntry;