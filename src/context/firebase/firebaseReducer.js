export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const SHOW_LOADER = 'SHOW_LOADER';

const handlers = {
  DEFAULT: state => state,
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [GET_NOTES]: (state, action) => ({...state, notes: action.payload, loading: false}),
  [ADD_NOTE]: (state, action) => ({...state, notes: [...state.notes, action.payload], loading: false}),
  [DELETE_NOTE]: (state, action) => ({...state, notes: state.notes.filter(note => note.id !== action.payload)})
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action)
}