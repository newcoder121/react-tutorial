import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopy = () => {
    // console.log("I am copy");
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleremPuncClick = () => {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let cleanString = text.replace(regex, "");
    setText(cleanString);
    props.showAlert("Punctuations Removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        // style={{
        //   backgroundColor: props.mode === 'dark' ? 'grey' : 'white'
        // }}
      >
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            class="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleremPuncClick}>
          Remove Punctuations
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        // style={{
        //       backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        //     }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}