import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';

const columns = [{ headerName: 'ID', field: 'ID' }, { headerName: 'First Name', field: 'First Name' }, { headerName: 'Last Name', field: 'Last Name' }];
const styles = {
    height: 300,
}

class ImportedStudents extends Component {
  render() { 
      return (
        <div id="myGrid" className="ag-fresh" style={styles}>
          <AgGridReact
              onGridReady = {this.onGridReady.bind(this)}
              onSelectionChanged={this.onSelectionChanged.bind(this, this.props.data)}
              columnDefs={columns}
              rowData={this.props.data}
              rowSelection="single"
              enableSorting="true"
              enableFilter="true"
              rowHeight="22"
          />
        </div>
    )
  }

  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  onSelectionChanged(row) {
    let selectedRows = this.api.getSelectedRows();
    let temp;
    selectedRows.forEach( function(selectedRow, index) {
        temp = row.indexOf(selectedRows[0])
    });
    this.props.updateTables(temp, selectedRows[0])
    // this.api.setRowData(this.props.data);
  }



}

export default ImportedStudents;