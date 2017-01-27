import React from 'react';

const NewTopic = (props) => (
  <form>
  <label>
    New Topic: <br />
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
)

export default NewTopic;