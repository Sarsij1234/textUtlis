import React, {useState} from 'react'

export default function TextForm(props) {
    const ClickToClear=()=>{
        let newText="";
        SetText(newText);
        props.showAlert("Text is Cleared","success");
    }
    const handleUpClick=()=>{
    
        let newText=text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted To Upper Case","success");
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        SetText(newText);
       props.showAlert("Converted To Lower Case","success");
    }
    const HandleOnChange=(event)=>{
        SetText(event.target.value);
    }
    const[text,SetText]=useState('Enter the Text');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Upper Case</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert To Lower Case</button>
<button type="button" className="btn btn-success mx-2 my-2"onClick={ClickToClear}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'black':'white'}}>
       <h2>Text Summary</h2>
       <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length}Minutes To Read</p>
       <h1>Preview</h1>
       <p>{text.length>0?text:'Enter the text to preview'}</p>
    </div>
    </>
  )
}
