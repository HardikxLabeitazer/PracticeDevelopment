import React from 'react'
import { useRef } from 'react'
export default function Usingref({onNewColor=f=>f}) {
  const txtTitle = useRef();
  const hexColor = useRef();
  const submit=e=>{
      e.preventDefault();
      const title = txtTitle.current.value;
      const color = hexColor.current.value;
      onNewColor(title,color);
      txtTitle.current.value ="";
      hexColor.current.value ="";
  }
  return (
    <div>
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder='color title...' required></input>
            <input ref={hexColor} type="color" required></input>
            <button>ADD</button>
        </form>
    </div>
  )
}
