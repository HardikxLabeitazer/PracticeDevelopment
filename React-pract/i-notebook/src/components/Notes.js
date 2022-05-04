import React from 'react'
import { useContext, useEffect, useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from '../components/NoteItem';
import AddNote from './AddNote';
export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()

  }, [])
  const [note,setNote]=useState({etitle:"",edescription:"",etag:"default"})
  const ref = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({title :currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }

  const handleclick=(e)=>{
    e.preventDefault()
   
}
const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}

  return (
    <>
      <AddNote />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" value={note.title} className="form-control" id="etitle" name="etitle" onChange={onChange} aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" onChange={onChange} className="form-control" value={note.description} name="edescription" id="edescription" />
                </div>
                <div className="mb-3">
                  <label className="form-check-label" htmlFor="tag" >Tag</label>
                  <input type="text" value={note.tag} className="form-control" id="etag" name="etag" onChange={onChange} />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick ={handleclick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  )
}
