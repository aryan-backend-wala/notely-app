import '../Model.css'
import AddNote from "./addNote";

export default function Modal({ isOpen, onAddNote, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Note</h2>
        <div className="modal-content">
          <AddNote 
            onAddNote={onAddNote}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

