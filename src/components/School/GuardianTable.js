import React from 'react';
import MaterialTable from 'material-table';

export function  GuardianTable (props){

    console.log(props.value);

    const [state, setState] = React.useState({
        columns: [
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Email', field: 'emailID' },
        ],
        data: props.value
      });
    
      return (
        <MaterialTable
          title="Guardian Details"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      );
}

export default GuardianTable
