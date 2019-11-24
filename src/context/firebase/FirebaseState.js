import axios from 'axios';
import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer, SHOW_LOADER, ADD_NOTE, DELETE_NOTE, GET_NOTES } from './firebaseReducer';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }
  const [ state, dispatch ] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const getNotes = async () => {
    showLoader();
    let res = await axios.get(`${url}/notes.json`);
    const payload = Object.keys(res.data).map(i => ({...res.data[i], id: i}))
    dispatch({type:GET_NOTES, payload })
  }
  
  const addNote = async title => {
    //showLoader();
    const note = {
      date: new Date().toJSON(),
      title
    }
    let res = await axios.post(`${url}/notes.json`, note);
    const payload = {
      ...note,
      id: res.data.name
    }
    dispatch({type: ADD_NOTE, payload})
  }

  const deleteNote = async id => {
    let res = await axios.delete(`${url}/notes/${id}.json`)

    dispatch({type: DELETE_NOTE, payload: id})
  }


  return (
    <FirebaseContext.Provider value={{
      state, getNotes, addNote, deleteNote, showLoader 
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};

