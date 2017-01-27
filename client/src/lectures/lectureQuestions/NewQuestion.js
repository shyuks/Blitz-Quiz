import React from 'react';

const NewTopic = (props) => (
  <form>
  <h4>New Question</h4>
  <label>
    Question: <br />
    <input type="text" name="name" />
  </label><br />
  <label>
    Type of Question: <br />
    <input type="text" name="name" />
  </label><br />
  <label>
    Answer: <br />
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
)

export default NewTopic;