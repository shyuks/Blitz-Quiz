import React, { Component, PropTypes } from 'react';
import {Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { teacherLogout, navigateSidebar } from '../../actions/teacher_actions';

import SidebarPersonal from './SidebarPersonal';

import './../../App.css';

//=========================================
//            Styles
//=========================================
const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    fontSize: '1.2em',
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


class SidebarContent extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleLogout() {
    this.props.teacherLogout();
    this.context.router.push('/');
  }

  render() {
    const style = styles.sidebar;

    return (
      <SidebarPersonal style={style}>
        <div style={styles.content}>
          <a href="#" 
            style={styles.sidebarLink}
            onClick={() => this.navigateSidebar('')}>
          <Glyphicon className="icon" glyph="dashboard" /> Dashboard
          </a>
          <a href="#" 
            style={styles.sidebarLink}
            onClick={() => this.navigateSidebar('Students')}>
          <Glyphicon className="icon" glyph="education" /> Students
          </a>
          <a href="#" 
            style={styles.sidebarLink}
            onClick={() => this.navigateSidebar('Lectures')}>
          <Glyphicon className="icon" glyph="book" /> Lectures
          </a>
          <div style={styles.divider} />
            <a href="#"
            style={styles.sidebarLink}
            onClick={() => this.handleLogout()}>
          <Glyphicon className="icon" glyph="log-out" /> Logout
          </a>
        </div>
      </SidebarPersonal>
    );
  }
};

function mapStateToProps(state) {
  return {
    tData: state.teacherState.tData
  }
}

export default connect(mapStateToProps, { teacherLogout, navigateSidebar })(SidebarContent);