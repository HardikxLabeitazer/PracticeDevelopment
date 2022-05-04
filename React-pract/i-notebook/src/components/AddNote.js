import React, { useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext';
const AddNote=()=> {
    const context = useContext(noteContext);
    const {addNote} =context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"})
    const handleclick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
         <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" onChange={onChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" onChange={onChange} className="form-control" name="description" id="description"/>
        </div>
        <div className="mb-3">
            <label className="form-check-label" htmlFor="tag" >Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNote