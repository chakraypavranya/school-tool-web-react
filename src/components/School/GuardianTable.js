import React from 'react';
import MaterialTable from 'material-table';

export function  GuardianTable (props){

    console.log(props.value);

    const columns = [
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'Email', field: 'emailID' },
      {
        title: 'Action',
        render: rowData => 
          {
            return(
            <>
              <div className="ui buttons">
                <button className="ui button" onClick={()=>console.log(rowData.authenticatedUserID)}>View</button>
                <div className="or"></div>
                <button className="ui green button" onClick={()=>console.log(rowData.authenticatedUserID)}>Edit</button>
                <div className="or"></div>
                <button className="ui red button" onClick={()=>console.log(rowData.authenticatedUserID)}>Delete</button>
              </div>
              
            </>
            )
          } 
      }
    ]

    const data = props.value

      return (
        <MaterialTable
          title="Guardian Details"
          columns={columns}
          data={data}
        />
      );

      
}

export default GuardianTable
