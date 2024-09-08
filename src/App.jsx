import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NoteBody from "./components/NoteBody";
import { useState } from "react";
import { initialNotes } from "./utils/initialNotes";
import { DateTime } from "luxon";

export default function App(){
  const [notes, setNotes] = useState(initialNotes);
  const [currentNote, setCurrentNote] = useState(null);

  function handleAddNote(note){
    if(currentNote){
      
    } else {
      setNotes(prevNote => {
        return [
          ...prevNote,
          {
            id: new Date().toLocaleTimeString(),
            ...note,
            timeStamp: DateTime.now().toISO()
          }
        ]
      })
    }
  }

  function handleDeleteNote(id){
    setNotes(notes.filter(note => note.id !== id));
  }

  function handleCheckbox(id){
    const updateNote = notes.find(note => note.id === id);
    setNotes(notes.map(note => {
      if(note.id === updateNote.id){
        return {...note, isDone: !note.isDone}
      } else {
        return note
      }
    }))
    setCurrentNote(updateNote);
  }

  console.log(notes);

  return (
    <Box bgColor={'rgba(238, 238, 238, 1)'}>
      <NavBar 
        onAddNote={handleAddNote}
      />
      <NoteBody 
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onEditNote={handleCheckbox}
      />
    </Box>
  );
}