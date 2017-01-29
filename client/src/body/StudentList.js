import React, {Component} from 'react';
import ImportedStudents from './ImportedStudents';
import AvailableStudents from './AvailableStudents';
import axios from 'axios'
let arr;
let criteria = false;

const dataImportedStudents = [
  { 'firstName': 'Hu', 'lastName': 'Bobson', id: 1 },
  { id: 2, 'firstName': 'John', 'lastName': 'Kim'}
]

class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        class: 'Biology 100',
        importedStudents: dataImportedStudents,
        availableStudents: null
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = 
    axios.get('/api/students')
    .then(function (data) {
      arr = data.data.map(function(student, index){
        return  {    
                  id: student.id, 
                  firstName: student.firstName,
                  lastName: student.lastName
                };
      })
      criteria = true;
      _this.setState({
        availableStudents: arr
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
        <div>
            <ImportedStudents data={this.state.importedStudents} removeStudents={this.removeStudents.bind(this)}/>
            <AvailableStudents data={this.state.availableStudents} addStudents={this.addStudents.bind(this)}/>
        </div>
    )
  }

  addStudents (index, row) {
    console.log("state is currently ", this.state.availableStudents)
    this.state.availableStudents.splice(index, 1)
    this.state.importedStudents.push(row)
    this.setState({
      importedStudents: this.state.importedStudents,
      availableStudents: this.state.availableStudents
    })
    console.log("state is now ", this.state.availableStudents)
  }

  removeStudents (index, row) {
    console.log("state is currently ", this.state.availableStudents)
    this.state.availableStudents.push(row)
    this.state.importedStudents.splice(index, 1)
    this.setState({
      importedStudents: this.state.importedStudents,
      availableStudents: this.state.availableStudents
    })
    console.log("state is now ", this.state.availableStudents)
  }
}

export default StudentList;