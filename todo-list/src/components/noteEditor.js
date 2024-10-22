import React, { useState } from 'react';

function NoteEditor({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('media'); // Valor predeterminado 'media'

  const handleAddNote = () => {
    onAddNote({ title, content, priority });
    setTitle('');
    setContent('');
    setPriority('media'); // Restablecer a valor predeterminado
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
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>
      <button onClick={handleAddNote}>Agregar Nota</button>
    </div>
  );
}

export default NoteEditor;

