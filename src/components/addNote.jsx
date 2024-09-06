import { useState } from "react";

export default function AddNote({onAddNote}){
  const [note, setNote] = useState({
    title: '',
    description: '',
    category: 'personal',
    isDone: false
  })

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
                title: e.target.value
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
      <button onClick={() => {
        onAddNote(note)
        setNote({
          title: "",
          description: "",
          category: 'personal',
          isDone: false
        })
      }}>Add</button>
    </>
  );
}