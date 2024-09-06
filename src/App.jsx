import { useRef, useState } from "react";
import AddNote from "./components/addNote";
import { initialData } from "./utils/initialData";

export default function Note(){
  const [notes, setNotes] = useState(initialData);

  function handleAddNote(note){
    setNotes([...notes, note])
  }

  console.log(notes)

  return (
    <div>
      <h1>Notely</h1>
      <AddNote onAddNote={handleAddNote} />
    </div>
  );
}


