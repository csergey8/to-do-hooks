import React from 'react';

const Notes = ({ notes, onDeleteHandler }) => (
    <ul className="list-group">
    {
      notes.map(note => (
        <li 
          className="list-group-item note"
          key={note.id}
        >
          <div>
            <strong>{note.title}</strong>
            <small>{new Date(note.date).toLocaleDateString()}</small>
          </div>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteHandler(note.id)}
        >
          &times;
        </button>
        </li>
      ))
    }
    </ul>
      
    
)

export default Notes;