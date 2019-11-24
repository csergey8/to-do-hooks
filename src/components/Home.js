import React, { useContext, useEffect } from 'react';
import Form from './Form';
import Notes from './Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import Loader from './Loader';

const Home = () => {
  const { state, getNotes, deleteNote } = useContext(FirebaseContext);

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div>
      <Form />
      <hr />
      { state.loading ? <Loader /> : <Notes notes={state.notes} onDeleteHandler={deleteNote}/> }
    </div>
  );
};

export default Home;