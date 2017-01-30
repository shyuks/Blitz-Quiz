import React, {Component} from 'react';
import ImportedStudents from './ImportedStudents';
import AvailableStudents from './AvailableStudents';
import StudentPhoto from './StudentPhoto';
import axios from 'axios'

let arr;
let criteria = false;

const dataImportedStudents = []

class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        class: this.props.currentClass,
        importedStudents: dataImportedStudents,
        availableStudents: null,
        photo: null
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
                  lastName: student.lastName,
                  photo: student.photo
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
        <div className= "row">
          <div className="col-sm-8">
            <ImportedStudents data={this.state.importedStudents} removeStudents={this.removeStudents.bind(this)} changePhoto ={this.changePhoto.bind(this)}/>
            <AvailableStudents data={this.state.availableStudents} addStudents={this.addStudents.bind(this)} changePhoto ={this.changePhoto.bind(this)}/>
          </div>
          <div className="col-sm-4">
            <StudentPhoto photo= {this.state.photo} />
          </div>
        </div>
    )
  }

  addStudents (index, row) {
    this.state.availableStudents.splice(index, 1)
    this.state.importedStudents.push(row)
    this.setState({
      importedStudents: this.state.importedStudents,
      availableStudents: this.state.availableStudents
    })
  }

  removeStudents (index, row) {
    this.state.availableStudents.push(row)
    this.state.importedStudents.splice(index, 1)
    this.setState({
      importedStudents: this.state.importedStudents,
      availableStudents: this.state.availableStudents
    })
  }

  changePhoto (newPhoto) {
    this.setState({
      photo: newPhoto
    })
    console.log(this.state.photo)
  }



}

export default StudentList;