import React from 'react';

import SidebarPersonal from './SidebarPersonal';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  }
};

const SidebarContent = (props) => {
  const style = styles.sidebar;

  return (
    <SidebarPersonal style={style}>
      <div style={styles.content}>
        <a href="#" style={styles.sidebarLink}>Home</a>
        <a href="#" style={styles.sidebarLink}>Responsive Example</a>
        <div style={styles.divider} />
          <a href="#" style={styles.sidebarLink}>Mock menu item 1</a>
      </div>
    </SidebarPersonal>
  );
};

export default SidebarContent;