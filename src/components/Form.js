import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form = () => {

  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext)

  const submitHandler = e => {
    e.preventDefault();

    if(value.trim()){
      addNote(value.trim())
        .then(() => {
          alert.show('Added', 'success')
        })
        .catch(() => {
          alert.show('Error', 'danger')
        })
      setValue('');
    } else {
      alert.show('Enter Text', 'danger')
    }

    //alert.show(value);

  }
  return (
    <form className="form-group" onSubmit={submitHandler}>
      <input 
        className="form-control" 
        type="text"  
        placeholder="Enter task name"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
export default Form;