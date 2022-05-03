import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "626d16ece74d919bebbedd09",
          "user": "626cf3bad4db6629bc712197",
          "title": "mytitle",
          "description": "easyboy",
          "tag": "General",
          "date": "2022-04-30T11:01:01.001Z",
          "__v": 0
        },
        {
          "_id": "626d16f7e74d919bebbedd0b",
          "user": "626cf3bad4db6629bc712197",
          "title": "mytitle",
          "description": "easyboy",
          "tag": "personal",
          "date": "2022-04-30T11:01:11.078Z",
          "__v": 0
        },
        {
          "_id": "626d231cc003e42fb18c96b7",
          "user": "626cf3bad4db6629bc712197",
          "title": "After",
          "description": "Afterdesc",
          "tag": "personal",
          "date": "2022-04-30T11:53:00.539Z",
          "__v": 0
        },
        {
          "_id": "626d385a0c260fcc9d42a558",
          "user": "626cf3bad4db6629bc712197",
          "title": "Singing",
          "description": "Singing a song",
          "tag": "favourite",
          "date": "2022-04-30T13:23:38.730Z",
          "__v": 0
        }
      ]

  const [notes,setNotes]= useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;