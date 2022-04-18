import React from 'react'
import { useState } from 'react'



export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");
    
    const handleUpClick=()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleDownClick=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>



        </div>
    )
}
