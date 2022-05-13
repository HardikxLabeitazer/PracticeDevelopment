import React,{useState} from 'react'
import { useColors } from "../context/color-hooks"
export default function WithoutUsingref() {
  const [title, setTitle] = useState("");
  const [color,setColor]=useState("#000000");
  const [rating,setRating]=useState(0);
  const {addColor}=useColors();
  const submit =e=>{
    e.preventDefault();
    addColor(title,color,rating);
    setTitle("");
    setColor("");
  }
    return (
    <div>
        <form onSubmit={submit}>
        <input
        value={title}
        onChange={event=>setTitle(event.target.value)}
        type="text"
        placeholder='color title..'
        required
        />
        <input
        value={rating}
        onChange={event=>setRating(event.target.value)}
        type="text"
        required
        />
        <input
        value={color}
        onChange={event=>setColor(event.target.value)}
        type="color"
        required
        />

        <button>ADD</button>

        </form>

    </div>
  )
}
