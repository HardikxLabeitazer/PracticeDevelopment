import React, { useContext } from 'react'
import { ColorContext } from '../../ColorContext'
import Color from './Color'
import { useColors } from "../context/color-hooks";

export default function ColorList() {
  const {colors}=useColors();
    if(!colors.length) return <div>No Colors Listed.</div>
  return (
    <div className='color-list'>
        {
            colors.map(color=><Color key={color.id} {...color}/>)
        }
    </div>
  )
}
