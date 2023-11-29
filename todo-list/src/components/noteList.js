import React, { useState } from 'react';
import Note from './note';

function NoteList({ notes, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-list">
      <input
        type="text"
        placeholder="Buscar notas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredNotes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
