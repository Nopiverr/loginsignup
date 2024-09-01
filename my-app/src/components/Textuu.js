import React, { useState } from "react";

export default function Textuu(props) {
  const handleUpClick=()=> {
    console.log("uppercase was clicked "+text);
    let newText=text.toUpperCase();
    setText(newText);
    
  }
  const handleOnChange=(event)=>{
    console.log("uppercase was clicked ");
    setText(event.target.value)
  }

  const handleClearText =()=>{
    let newText='  ';
    setText(newText);
  }

  const EmailExtractor=()=>{
    
    let newText=/[a-zA-Z0-9._%+-]+@gmail\.com/g;
    const foundGmail = text.match(newText);
    if (foundGmail) {
      setGmail(foundGmail[0]); // Set the first found Gmail address
    } else {
      setGmail(''); // Reset if no Gmail found
    }
  }
  const [text, setText] = useState("enter text here2 "); //hook
  //setText("new text"); to change text
  const [gmail, setGmail] = useState('');

  return (
    <>
    <div className="container"  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white'  , color: props.mode === 'dark' ? 'white' : 'black'}}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary  mx-3 " onClick={handleUpClick}>convert to uppercase</button>
      <button type="button" class="btn btn-primary mx-3" onClick={handleClearText}>Clear text</button>
      <button type="button" class="btn btn-primary mx-3 "onClick={EmailExtractor}>Find email</button>
      
      </div>
      <div className="container my-3"  style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>your text summary</h2>
        <p>{text.split("").length} words , {text.length}characters</p>
        <h3>Preview</h3>
        <p>{text.length>0? text :"Enter something to preview it here"}</p>

        {gmail && (
          <div>
            <h3>Found Gmail:</h3>
            <p>{gmail}</p>
          </div>
        )}
      </div>
    </>
  );
}
//onClick={handleUpClick} is a function in js 