import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NoteBody from "./components/NoteBody";
import { useState } from "react";
import { initialNotes } from "./utils/initialNotes";

export default function App(){
  const [notes, setNotes] = useState(initialNotes);

  function handleAddNote(note){
    setNotes(prevNote => {
      return [
        ...prevNote,
        {...note, id: new Date().toLocaleTimeString()}
      ]
    })
  }

  function handleDeleteNote(id){
    setNotes(notes.filter(note => note.id !== id));
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
      />
    </Box>
  );
}