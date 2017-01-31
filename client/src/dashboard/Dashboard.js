import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import axios from 'axios';
import io from 'socket.io-client';

import SidebarContent from './SidebarContent';
import SidebarPersonal from './SidebarPersonal';
import SidebarTopArea from './SidebarTopArea';
import Body from '../body/Body';


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

class Dashboard extends Component {
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
      tId: props.tId,
      socket: null
    };

    this.handleSideNav = this.handleSideNav.bind(this);
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
    axios.get('/test/' + this.state.tId).then(response => {
        var socket = io('http://localhost:9000', {'forceNew':true });
        this.setState({
          teacher: response.data.teacher,
          allClasses: response.data.classes,
          selectedClass: response.data.classes[2],
          loaded: true,
          socket: socket
        });
        socket.on('connect', () => {
          console.log('Building classroom');
          let min = this.state.selectedClass;
          socket.emit('t_createClass', {
            id: min.id,
            className: min.className,
            teacher: this.state.teacher
        });
      });
    });
  }

  selectClass(someClass) {
     this.setState({selectedClass: someClass, navigation: ''});
  }

//=========================================
//            Render
//=========================================
  render() {

    const sidebar = <SidebarContent tId={this.state.tId} teacher={this.state.teacher} handleSideNav={this.handleSideNav} backtoLogin={this.backtoLogin.bind(this)}/>;
    let min = this.state.selectedClass;

    const clssRoom = {
      id: this.state.selectedClass.id,
      className: this.state.selectedClass.className,
      teacher: this.state.teacher
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
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen.bind(this)
    };

    let loadItem = null;
    if(this.state.loaded) {
      loadItem = <Body navigation={this.state.navigation}
            selTests={this.state.selectedClass.tests}
            selStudents={this.state.selectedClass.students}
            classId={this.state.selectedClass.id} 
            sock={clssRoom}
            tId={this.state.tId}
            currentClass={this.state.selectedClass}/>
    } 
    return (
      <Sidebar {...sidebarProps}>
        <SidebarTopArea title={contentHeader}
          class={this.state.selectedClass}
          classes={this.state.allClasses}
          selectClass={this.selectClass.bind(this)}>

          {loadItem}
          
        </SidebarTopArea>
      </Sidebar>
    );
  }
}

export default Dashboard;