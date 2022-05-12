import React from 'react'
import Stars from '../Stars/Stars'
import { FaTrash } from 'react-icons/fa'
export default function Color({id,title,color,rating,onRemove=f=>f,onRate=f=>f}) {
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=>onRemove(id)}>
            <FaTrash/>
        </button>
        <div style={{height:50,backgroundColor:color}}></div>
        <Stars selectedStars={rating} onRate={rating=>onRate(id,rating)}/>
    </div>
  )
}
