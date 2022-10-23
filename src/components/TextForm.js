import React, {useState} from "react";



export default function TextForm(props){

     const handleUpClick = () =>{
       console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase is invoked", "success");
        
     }
     const handleLowClick = () =>{
        console.log("LowerCase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);

        
     }

     const handleOnChange = (event) =>{
        console.log("Uppercase is clicked");
        setText(event.target.value);
     }

     const handleClearText = () =>{
        console.log("Clear Text");
        let newText = " ";
        setText(newText);
     }

     const calculateWords = () => {
        let numOfWords = 0;
        let words = text.split(" ");
        let length = words.length;
        numOfWords =
          words[length - 1] === "" || words[length - 1] === " "
            ? length - 1
            : length;
        console.log(words);
        return numOfWords;
      };

    const [text, setText] = useState('Enter your text here');

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'light'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-2">
            <h1>Your text summary: </h1>
            <p> {calculateWords()} words and {text.trim().length} character </p>
            <p>  {calculateWords() * 0.008} Minutes to read  </p>
            <h2>Preview</h2>
            <p>{text}</p>
           
        </div>
        </>
    )
}
