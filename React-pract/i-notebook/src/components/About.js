import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
   a.update()
    
  },)
  
  return (
    <div>
        This is About {a.state.name} and he is in class{a.state.class}
    </div>
  )
}
