import { useId, useState } from "react";

export default function AddNote({onAddNote}){
  const id = useId();
  const [note, setNote] = useState({
    id: id,
    title: '',
    description: '',
    category: 'personal',
    isDone: false,
    ...getCurrentTimeStamp()
  })

  function getCurrentTimeStamp(){
    return ({
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    })
  }

  return (
    <>
      <label>
        Title: {" "}
        <input 
          type="text"
          placeholder="Add title"
          value={note.title}
          name="title"
          onChange={(e) => {
            setNote(prevNote => {
              return {
                ...prevNote, 
                title: e.target.value,
                ...getCurrentTimeStamp()
              }
            })
          }}
        />
      </label>
      <textarea 
        value={note.description}
        name="description"
        placeholder="this is a description"
        onChange={(e) => {
          setNote({...note, description: e.target.value})
        }}
      />
      <label>
        Category: {" "}
        <select 
          value={note.category}
          name="category"
          onChange={(e) => {
            setNote({...note, category: e.target.value})
          }}
        >
          <option value="personal">personal</option>
          <option value="home">home</option>
          <option value="business">business</option>
        </select>
      </label>
      <label>
        <input 
          type="checkbox"
          checked={note.isDone}
          name="isDone"
          onChange={(e) => {
            setNote({...note, isDone: e.target.checked})
          }}
        />
        {" "} Completed
      </label>
      <button onClick={() => {
        onAddNote({...note, id: id + note.time })
        setNote({
          id: id,
          title: "",
          description: "",
          category: 'personal',
          isDone: false,
          ...getCurrentTimeStamp()
        })
      }}>Add</button>
    </>
  );
}