import React,{useState} from 'react'

export default function WithoutUsingref({OnNewColor=f=>f}) {
  const [title, setTitle] = useState("");
  const [color,setColor]=useState("#000000");
  const submit =e=>{
    e.preventDefault();
    OnNewColor(title,color);
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
