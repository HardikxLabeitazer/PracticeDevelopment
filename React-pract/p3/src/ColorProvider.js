import React, { createContext, useState } from 'react'
import colorData from "./components/Colors/colorData.json"
import {v4} from "uuid"
const ColorContext =createContext();
export  function ColorProvider({children}) {
    const[colors,setColors] = useState(colorData)
    const addColor =(title,color)=>{
        setColors([
            ...colors,{id:v4(),rating:0,title,color}
        ])
    }
    const rateColor =(id,rating)=>
        setColors(
            colors.map(color=>(color.id===id?{...color,rating}:color))
        )
    
        const removecolor = id=>setColors(colors.filter(color=>color.id !== id))

  return (
    <ColorContext.Provider value={{colors,addColor,removecolor,rateColor}}>
        {children}
    </ColorContext.Provider>
  )
}
