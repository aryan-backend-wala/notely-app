import { useRef, useState, useEffect   } from "react";

export default function NoteList({notes, onDeleteNote, onEditnote}){
  return (
    <>
      {notes.map((note) => <div key={note.id}>
        <NoteCard 
        note={note} 
        onClick={onDeleteNote}
        onEdit={onEditnote}
      />
      </div>)}
    </>
  );
}

function NoteCard({note, onClick, onEdit}){
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="card">
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
          { isEditing && <FunDialog
            isEditing={isEditing}
            note={note}
            setIsEditing={setIsEditing}
            onEdit={onEdit}
            />}
          <button onClick={() => setIsEditing(true)}>
            <img 
              src="/icons/edit_icon.svg"
            />
          </button>
          <button onClick={() => onClick(note.id)}>
            <img 
              src="/icons/delete_icon.svg"
            />
          </button>
        </div>
      </div>
      <h1 className="title">{note.title}</h1>
      <p className="description">{note.description}</p>
    </div>
  );
}

function FunDialog({note, isEditing, setIsEditing, onEdit}){
  const dialogRef = useRef(null)
  useEffect(() => {
    if (isEditing) {
      dialogRef.current?.show(); 
    } else {
      dialogRef.current?.close();
    }
  }, [isEditing]);
  return (
    <>
      <dialog id="dialog" ref={dialogRef}>
              <div>
                <label>
                  <input 
                    type="text"
                    value={note.title}
                    name="title"
                    onChange={(e) => {
                      onEdit({
                        ...note,
                        title: e.target.value
                      })
                    }}
                  />
                </label>
                <textarea 
                  value={note.description}
                  name="description"
                  placeholder="this is a description"
                  onChange={(e) => {
                    onEdit({
                      ...note,
                      description: e.target.value
                    })
                  }}
                />
                <label>
                  Category: {" "}
                  <select 
                    value={note.category}
                    name="category"
                    onChange={(e) => {
                      onEdit({
                        ...note,
                        category: e.target.value
                      })
                    }}
                  >
                    <option value="personal">personal</option>
                    <option value="home">home</option>
                    <option value="business">business</option>
                  </select>
                </label>
                <button onClick={() => setIsEditing(false)}>Save</button>
              </div>
            </dialog>
    </>
  );
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
