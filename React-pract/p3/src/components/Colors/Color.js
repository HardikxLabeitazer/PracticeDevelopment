import React from 'react'
import Stars from '../Stars/Stars'
import { FaTrash } from 'react-icons/fa'
import { useColors } from "../context/color-hooks"
export default function Color({id,title,color,rating}) {
  const {rateColor,removecolor}=useColors();
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=>removecolor(id)}>
            <FaTrash/>
        </button>
        <div style={{height:50,backgroundColor:color}}></div>
        <Stars selectedStars={rating} onRate={rating=>rateColor(id,rating)}/>
    </div>
  )
}
