import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    console.log("uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <div className="container">
      <h1>
        {props.heading}- {text}
      </h1>

      <div class="mb-3">
        <label for="myBox" class="form-label">
          {props.heading}
        </label>
        <textarea
          class="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div className="container">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length}
        </p>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
