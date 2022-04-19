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
    const handlesymbols=()=>{  //symbols
     const regex = /[0-9/A-Z/a-z//]/g;
     const letters = text.match(regex);
     const res1 = letters.join('');
     setText(res1);
    }
    const handleNumExtract=()=>{
        const regex = /[0-9//]/g;
        const digits = text.match(regex);
        const res = digits.join('');
        setText(res);
    }
    const handleDeleteNumbers=()=>{
        const regex =/[A-Z/a-z//]/g;
        const words = text.match(regex);
        const res = words.join('');
        setText(res);
    }
    const handlefirstcapital=()=>{
        const words = text.split(" ");
        let uppercasewords ='';
        words.forEach(element=>{
            uppercasewords += element.charAt(0).toUpperCase()+element.slice(1)+" "
        });
        setText(uppercasewords)
    }
    return (
        <>
          <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handlesymbols}>Remove Symbols</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleNumExtract}>Extract Numbers</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleDeleteNumbers}>Remove numbers</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handlefirstcapital}>First Letter Capital</button>
        </div>
        <div className='container my-3 mx-2' >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
      
    )
}
