import React, { createContext, useState,useContext } from 'react'
import colorData from "../Colors/colorData.json"
import {v4} from "uuid"
export const useColors =()=> useContext(ColorContext);
const ColorContext =createContext();
export  function ColorProvider({children}) {
    const[colors,setColors] = useState(colorData)
    const addColor =(title,color,rating)=>{
        setColors([
            ...colors,{id:v4(),rating:rating,title:title,color:color}
        ])
    }
    const rateColor =(id,rating)=>
        setColors(
            colors.map(color=>(color.id===id?{...color,rating}:color))
        )
    
    // const removecolor = id =>setColors(colors.filter(color=>color.id !== id))
    const removecolor=id=>(
        setColors(colors.filter(color=>color.id !== id))

    )

  return (
    <ColorContext.Provider value={{colors,addColor,removecolor,rateColor}}>
        {children}
    </ColorContext.Provider>
  )
}
