import { matchRoutes } from "react-router-dom";
import NoteCard from "../../components/NoteCard/NoteCard";
import CreateNewNote from "../../components/CreateNewNote/CreateNewNote";

export default function NotesPage({ notes }) {
  return (
    <>
      <h1>Notes</h1>
      <CreateNewNote />
        <div>
          {notes.map((note, idx) => (
            <div key={idx}>
              <NoteCard note={note} idx={idx}/>
            </div>
          ))}
        </div>
    </>
  )
}