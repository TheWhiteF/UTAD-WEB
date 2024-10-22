import React, { useState, useEffect } from 'react';
import NoteList from './components/noteList';
import NoteEditor from './components/noteEditor';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleAddNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now() }]);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <h1>Notas</h1>
      <NoteEditor onAddNote={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App;


