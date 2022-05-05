import React, { useState } from "react";
import { ids } from "webpack";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []


  const [notes, setNotes] = useState(notesInitial)
  //ADD a note


  let note;

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2Y2YzYmFkNGRiNjYyOWJjNzEyMTk3In0sImlhdCI6MTY1MTMxMjc0OX0.kwAPQSZcPiKwuioqO7soyD8uBdaNVsungy5JWdBkJ0Q"

      },
      
    });

    const json = await response.json();
    console.log(json);
    setNotes(json)

    
  }
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2Y2YzYmFkNGRiNjYyOWJjNzEyMTk3In0sImlhdCI6MTY1MTMxMjc0OX0.kwAPQSZcPiKwuioqO7soyD8uBdaNVsungy5JWdBkJ0Q"

      },
      body: JSON.stringify({ title, description, tag })
    });




    const note = await response.json();
    setNotes(notes.concat(note))
    
  }
  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenode/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2Y2YzYmFkNGRiNjYyOWJjNzEyMTk3In0sImlhdCI6MTY1MTMxMjc0OX0.kwAPQSZcPiKwuioqO7soyD8uBdaNVsungy5JWdBkJ0Q"

      },
      body: JSON.stringify()
    });
    const json = response.json();


    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }
  //Edit a note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2Y2YzYmFkNGRiNjYyOWJjNzEyMTk3In0sImlhdCI6MTY1MTMxMjc0OX0.kwAPQSZcPiKwuioqO7soyD8uBdaNVsungy5JWdBkJ0Q"

      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
         break;
      }
     
    }
    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }} >
      {props.children}
    </NoteContext.Provider>
  )
}


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default NoteState;