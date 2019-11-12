import React from 'react';

const renderField = ({ input, label, type, meta, disabled, options }) => {
  const className = `field ${meta.error && meta.touched? 'error': ''}`;

  if(type==='checkbox'){
    return(
      <div className={className}>
        <div className="ui checkbox">
          <input  {...input} type={type} disabled={disabled}/>
          <label>{label}</label>
        </div>
      </div>
    )
  }
  else if(type==='select'){
    return(
      <div className={className}>
        <label>{label}</label>
        <select {...input} class="ui fluid dropdown" disabled={disabled}>
          <option>Select</option>
          {
           options &&
           options.map((type) =>{
              return (<option value={type.id}>{type.name}</option>)
            })
          }
        </select>
        {renderError(meta)}
      </div>
    )
  }
  else{
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} autoComplete="off" disabled={disabled} />
          {renderError(meta)}
      </div>
    )
  }
}

const renderError = ({touched,error})=>{
  if(touched && error){
    return(
      <div className="error message">
        <div className="header">{error}</div>
      </div>
    )
  }
}

export default renderField;
