import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className="note">
      <p>{note.title}</p>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  );
}

export default Note;
