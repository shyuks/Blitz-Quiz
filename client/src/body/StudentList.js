import React, {Component} from 'react';
import ImportedStudents from './ImportedStudents';
import AvailableStudents from './AvailableStudents';

const dataImportedStudents = [
  { ID: '1', 'First Name': 'Hu', 'Last Name': 'Bobson'},
  { ID: '2', 'First Name': 'John', 'Last Name': 'Kim'}
]

const dataAvailableStudents = [
  { ID: '1', 'First Name': 'John', 'Last Name': 'Bobson'},
  { ID: '2', 'First Name': 'Bob', 'Last Name': 'Mclaren'}
]

class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        class: 'Biology 100',
        importedStudents: dataImportedStudents,
        availableStudents: dataAvailableStudents
    };
  }

  render() {
    return (
        <div>
            <ImportedStudents data={this.state.importedStudents} updateTables={this.updateTables.bind(this)}/>
            <AvailableStudents data={this.state.availableStudents} updateTables={this.updateTables.bind(this)}/>
        </div>
    )
  }

  updateTables (index, row) {
    console.log("state is currently ", this.state.availableStudents)
    this.state.availableStudents.splice(index, 1)
    this.state.importedStudents.push(row)
    this.setState({
      importedStudents: this.state.importedStudents,
      availableStudents: this.state.availableStudents
    })
    console.log("state is now ", this.state.availableStudents)
  }


}

export default StudentList;