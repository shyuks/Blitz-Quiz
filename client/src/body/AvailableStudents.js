import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';

const data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
]

const columns = [{ key: 'id', name: 'ID' }, { key: 'firstName', name: 'First Name' }, { key: 'lastName', name: 'Last Name' }];
const rowGetter = rowNumber => data[rowNumber];



class AvailableStudents extends Component {
  constructor() {
    super();

    this.state = {

    };
  }


  render() {
    return (
        <div>
            <ReactDataGrid
                columns={columns}
                rowGetter={rowGetter}
                rowsCount={data.length}
                minHeight={500} />
        </div>
    )
  }

}

export default AvailableStudents;