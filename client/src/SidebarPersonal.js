import React from 'react';

const styles = {
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '16px',
    fontSize: '1.5em',
  },
};

const SidebarPersonal = (props) => {
  const rootStyle = styles.root;
  return (
    <div style={rootStyle}>
      <div style={styles.header}>Teacher Name</div>
      <div style={styles.header}>Class Name</div>
      {props.children}
    </div>
  );
};

export default SidebarPersonal;