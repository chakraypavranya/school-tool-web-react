import React from 'react';

const renderField = ({ input, label, type, meta }) => {
  const className = `field ${meta.error && meta.touched? 'error': ''}`;

  if(type==='checkbox'){
    return(
      <div className={className}>
        <div className="ui checkbox">
          <input  {...input} type={type} />
          <label>{label}</label>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} autoComplete="off" />
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
