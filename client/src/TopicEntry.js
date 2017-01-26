import React from 'react';

const TopicEntry = ({ listOfTopics, getTopic}) => (
  <table>
    <tbody>
      {listOfTopics.map((topic) => (
        <tr onClick={() => {
          getTopic(topic)
        }}>
        <td>{topic.name}</td>
        </tr> 
      ))}
    </tbody>
  </table>
)

export default TopicEntry;