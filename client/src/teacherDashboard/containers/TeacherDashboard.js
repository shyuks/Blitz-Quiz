import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTeacherData } from '../../actions/teacher_actions';
import { Link } from 'react-router';

import SidebarContent from './SidebarContent';
import SidebarPersonal from './SidebarPersonal';
import SidebarTopArea from './SidebarTopArea';
import Body from '../../body/Body';


const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

class TeacherDashboard
 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      docked: false,
      open: false,
      teacher: {firstName: 'EJ', lastName: 'Mason', photo: "http://starcasm.net/wp-content/uploads/2015/08/Jared-Fogle-in-Subway-Ad.jpg"},
      allClasses: [],
      selectedClass: {id: 4, className: 'Biology 100'},
      navigation: '',
      loaded: false,
      tId: 1053,
      socket: null
    };

    this.handleSideNav = this.handleSideNav.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

//=========================================
//            Begin Methods
//=========================================
  handleSideNav(e, location) {
    e.preventDefault();

    this.setState({
      navigation: location
    });
  }

  backtoLogin() {
    this.props.logout();
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({docked: this.state.mql.matches});
  }

  toggleOpen(e) {
    this.setState({open: !this.state.open});
    if (e) {
      e.preventDefault();
    }
  }

  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged.bind(this));
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged.bind(this));
    console.log('component will unmount');
  }

  componentDidMount() {
    this.props.getTeacherData(this.props.tId);
    // axios.get('/test/' + this.state.tId).then(response => {
    //     console.log('this is the response: ', response);
    //     this.setState({
    //       teacher: response.data.teacher,
    //       allClasses: response.data.classes,
    //       selectedClass: response.data.classes[2],
    //       loaded: true
    //     });
    // })
    //   .catch(err => {
    //     console.log('error: ', err);
    //   })
  }

  selectClass(someClass) {
     this.setState({selectedClass: someClass, navigation: ''});
  }

//=========================================
//            Render
//=========================================
  render() {

    console.log('tdata in render :', this.props.tData)

    const sidebar = <SidebarContent 
      tId={this.props.tId} 
      teacher={this.props.teacher} 
      handleSideNav={this.handleSideNav} 
      backtoLogin={this.backtoLogin.bind(this)}
    />;

    let min = this.state.selectedClass;

    const clssRoom = {
      id: this.props.selectedClass.id,
      className: this.props.selectedClass.className,
      teacher: this.props.teacher
    }
    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} 
            href="#" 
            style={styles.contentHeaderMenuLink}>=</a>}
        <span> React Sidebar</span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: true,
      open: true,
      onSetOpen: this.onSetOpen.bind(this)
    };

    let loadItem = null;
    // if(this.state.loaded) {
      loadItem = <Body navigation={this.state.navigation}
            selTests={           this.state.selectedClass.tests}
            selStudents={this.state.selectedClass.students}
            classId={this.state.selectedClass.id} 
            sock={clssRoom}
            tId={this.state.tId}
            currentClass={this.state.selectedClass}/>
    // } 
    return (
      <Sidebar {...sidebarProps}>
        <SidebarTopArea title={contentHeader}
          class={this.props.selectedClass}
          classes={this.props.allClasses}
          selectClass={this.selectClass.bind(this)}>

          {loadItem}
          
        </SidebarTopArea>
      </Sidebar>
    );
  }
}

function mapStateToProps(state) {
  return { 
    tId: state.teacherState.tId,
    tData: state.teacherState.tData,
    teacher: {
      firstName: state.teacherState.tData.teacher.firstName,
      lastName: state.teacherState.tData.teacher.lastName,
      photo: state.teacherState.tData.teacher.photo
    },
    allClasses: state.teacherState.tData.classes,
    selectedClass: {
      id: state.teacherState.tData.classes[0].id,
      className: state.teacherState.tData.classes[0].className
    },
    socket: null
  };
}

export default connect(mapStateToProps, { getTeacherData })(TeacherDashboard)
;