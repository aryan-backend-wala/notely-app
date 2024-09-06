import { useId, useState } from "react";
import AddNote from "./components/addNote";
import { initialData } from "./utils/initialData";
import { DateTime } from "luxon";
import NoteList from "./components/noteList";
import Modal from "./components/model";

export default function Note(){
  const [notes, setNotes] = useState(initialData);
  const [isModalOpen, setModalOpen] = useState(false);
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


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  console.log(notes)

  return (
    <div>
      <h1>Notely</h1>
      <button onClick={openModal}>Add</button>
      <NoteList 
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onEditnote={handleEditNote}
        isOpen={isModalOpen}
        onClose={closeModal}
        onModel={openModal}
      />
      <Modal 
        onAddNote={handleAddNote}
        isOpen={isModalOpen}
        onClose={closeModal}
        
      />
    </div>
  );
}