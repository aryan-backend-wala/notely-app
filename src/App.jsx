import { useId, useState } from "react";
import AddNote from "./components/addNote";
import { initialData } from "./utils/initialData";
import { DateTime } from "luxon";
import NoteList from "./components/noteList";

export default function Note(){
  const [notes, setNotes] = useState(initialData);

  const id = useId();

  function handleAddNote(note){
    setNotes(prevNote => {
      return [
        ...prevNote,
        {
          id: id + new Date().toLocaleTimeString(),
          ...note,
          timestamp: DateTime.now().toISO(),
        }
      ]
    })
  }

  function handleDeleteNote(id){
    setNotes(notes.filter(note => note.id !== id))
  }

  function handleEditNote(nextNote){
    setNotes(prevNote => {
      return prevNote.map(note => {
        if(note.id === nextNote.id){
          return nextNote
        } else {
          return note
        }
      })
    })
  }

  console.log(notes)

  return (
    <div>
      <h1>Notely</h1>
      <AddNote 
        onAddNote={handleAddNote} 
        id={id} 
      />
      <NoteList 
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onEditnote={handleEditNote}
      />
    </div>
  );
}