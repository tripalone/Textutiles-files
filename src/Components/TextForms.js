import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
     let newText= text.toUpperCase();
     setText(newText)
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
       }
       const handleClearClick = ()=>{
        let newText= " ";
        setText(newText)
       }
    const handleOnChange = (event)=>{
       setText(event.target.value);
       }
       const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        }

    const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange ={handleOnChange} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
