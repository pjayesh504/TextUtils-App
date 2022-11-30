import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Clicked")
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }



    const handleOnChange = (event) => {
        // console.log("on Changed")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To Uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver To Lowercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
