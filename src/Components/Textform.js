import React, { useEffect, useState } from 'react'


export default function Textform(props){
    
    const uppercaseclick = ()=>{
        //console.log("Uppercase button was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const lowercaseclick = ()=>{
        //console.log("Uppercase button was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const textclearclick = ()=>{
        //console.log("Uppercase button was clicked" + text);
        let newtext = ' ';
        setText(newtext);
    }

    const replaceclick = ()=>{
        //console.log("Uppercase button was clicked" + text);
        let newtext = text.replace(/[0-9]/g, '');
        setText(newtext);
    }

    const onchange = (event)=>{
        //Console.log("On Change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className = "container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {onchange} id="myBox" rows="7" cols="30"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick = {uppercaseclick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick = {lowercaseclick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick = {textclearclick}> Clear Text</button>
                <button className="btn btn-primary mx-1" onClick = {replaceclick}> Remove Numbers</button>

        </div>

        <div className = "container my-2">
            <h2>Text summary</h2>
            <p>Words -> <span className="btn btn-primary mx-1">{text.split(" ").length}</span></p>
            <p>Characters -> <span className="btn btn-primary mx-1">{text.length}</span></p>
            <p>Approx minutes to read -> <span className="btn btn-primary mx-1">{0.008 * text.split(" ").length}</span></p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}