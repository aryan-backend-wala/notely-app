import { Box, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NoteBody from "./components/NoteBody";
import { useState } from "react";
import { initialNotes } from "./utils/initialNotes";
import { DateTime } from "luxon";

export default function App(){
  const [notes, setNotes] = useState(initialNotes);
  const [currentNote, setCurrentNote] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleAddNote(notes){
    if(currentNote){
      setNotes(prevNote => 
        prevNote.map(note => 
          note.id === currentNote.id ? 
            {
              ...note,
              title: notes.title,
              description: notes.description,
              category: notes.category,
            } :
            note
        )
      )
    } else {
      setNotes(prevNote => {
        return [
          ...prevNote,
          {
            id: new Date().toLocaleTimeString(),
            ...notes,
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
  }

  function handleEditNote(id){
    const updateNote = notes.find(note => note.id === id);
    setCurrentNote(updateNote)
  }

  // console.log(notes);

  return (
    <Box bgColor={'rgba(238, 238, 238, 1)'}>
      <NavBar 
        onAddNote={handleAddNote}
        note={currentNote}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <NoteBody 
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onCheck={handleCheckbox}
        onEdit={handleEditNote}
        onOpen={onOpen}
      />
    </Box>
  );
}