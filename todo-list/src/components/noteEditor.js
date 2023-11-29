import React, { useState } from 'react';

function NoteEditor({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    onAddNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Agregar Nota</button>
    </div>
  );
}

export default NoteEditor;
