import { useState } from "react";

export default function App(){
  let noteId = 2
  const [noteData, setNoteData] = useState([
    {title: "A", category: 'personal', description: 'abc', isCompleted: false, id: 0},
    {title: "B", category: 'home', description: 'bcd', isCompleted: false, id: 1},
    {title: "C", category: 'business', description: 'cde', isCompleted: false, id: 2},
  ]);
  const [formData, setFormData] = useState({
    title: "",
    category: 'personal',
    description: "",
    isCompleted: false,
    id: 0
  })
  
  function handleChange(e){
    const { name, value } = e.target;
    setFormData(prevNote => {
      return {
        ...formData,
        [name]: value,
        id: noteId + 1
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setNoteData(prevNote => [...prevNote, formData])
    // console.log(formData);
  }

  console.log(noteData);
  
  return (
    <>
      <h1>Notely =&gt; write your task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title: {" "} 
          <input 
            type="text"
            placeholder="Add title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Category: {" "}
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="personal">Personal</option>
            <option value="home">Home</option>
            <option value="business">Business</option>
          </select>
        </label>
        <label>
          Description: {" "}
          <textarea 
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}