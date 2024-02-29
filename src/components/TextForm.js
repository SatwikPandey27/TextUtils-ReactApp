import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // setText("You have clicked on HandleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Uppercase !", "success");
    }
    const handleDownClick = ()=>{
        // setText("You have clicked on HandleDownClick")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lowercase !", "success");
    }
    const handleSpaceClick = ()=>{
        // setText("You have clicked on HandleSpaceClick")
        let newText = text.split(" ").join("");
        setText(newText);
        props.showAlert("All Spaces Removed from Text !", "success");
    }
    const handleESpaceClick = ()=>{
        // setText("You have clicked on HandleSpaceClick")
        let newText = text.split("  ").join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed from Text !", "success");
    }
    const handleClearClick = ()=>{
        // setText("You have clicked on HandleSpaceClick")
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared !", "success");
    }
    const handleCopyClick = ()=>{
        // setText("You have clicked on HandleSpaceClick")
        let textArea = document.getElementById('InputtextControl')
        textArea.select();
        document.execCommand('copy');
        alert("Text copied to clipboard")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  const [text, setText] = useState('')
//   text = "new text"; Wrong way to change text
//   setText("new text"); Correct way to change text
  return (
    <>
    <div>
      <div className="mb-3 mt-4">
        <h1>{props.heading}</h1>
        <label htmlFor="InputtextControl" className="form-label">Enter text below</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="InputtextControl" rows="4" placeholder='Enter text here...' style={{backgroundColor : props.mode==='dark'?'gray':'white', color : props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>Remove White Spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleESpaceClick}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{(text.split(" ").length)-1} words and {text.length} characters long.</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text above to preview"}</p>
    </div>
    </>
  )
}
