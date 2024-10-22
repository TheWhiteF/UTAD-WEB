import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className={`note ${note.priority}`}>
      <p><strong>{note.title}</strong></p>
      <p>{note.content}</p>
      <p>Prioridad: {note.priority}</p>
      <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  );
}

export default Note;

