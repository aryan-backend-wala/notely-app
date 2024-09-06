import { useRef, useState, useEffect   } from "react";
import Modal from "./model";

export default function NoteList({
  notes, 
  onDeleteNote, 
  onEditnote, 
  isEditing,
  isOpen,
  onClose,
  onModel}){
  return (
    <div className="container">
      {notes.map((note) => <div key={note.id} className="card">
        <NoteCard 
          note={note}
          onEdit={onEditnote}
          onDelete={onDeleteNote}
          isEditing={isEditing}
          onModel={onModel}
        />
        <h1 className="title">{note.title}</h1>
        <p className="description">{note.description}</p>
      </div>)}
    </div>
  );
}

function NoteCard({note, onEdit, onDelete, isOpen, onClose, onModel}){
  return (
    <div className="row">
      <CategoryColor category={note.category} />
      <div className="icons-row">
      <input 
        type="checkbox"
        checked={note.isDone}
        name="isDone"
        onChange={e => {
          onEdit({
            ...note,
            isDone: e.target.checked
          })
        }}
      />
      <button onClick={onModel}>
        <img 
          src="/icons/edit_icon.svg"
        />
      </button>
      <button onClick={() => onDelete(note.id)}>
        <img 
          src="/icons/delete_icon.svg"
        />
      </button>
      </div>
    </div>
  )
}

function CategoryColor({ category }) {
  const categoryClassMap = {
    business: "category business",
    home: "category home",
    personal: "category personal",
  }

  const selectedCategory = categoryClassMap[category] || 'category'
  return <div className={selectedCategory}>{category}</div>
}