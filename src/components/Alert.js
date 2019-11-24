import React, { useContext } from "react";
import { AlertContext } from '../context/alert/alertContext';

const Alert = () => {
  const { alert, hide } = useContext(AlertContext)
  //debugger;
  if(!alert.visible) {
    return null
  }
  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>{alert.text} </strong>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
