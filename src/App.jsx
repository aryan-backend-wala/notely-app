import { useId, useState } from "react";
import AddNote from "./components/addNote";
import { initialData } from "./utils/initialData";
import { DateTime } from "luxon";

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

  console.log(notes)

  return (
    <div>
      <h1>Notely</h1>
      <AddNote onAddNote={handleAddNote} id={id} />
    </div>
  );
}