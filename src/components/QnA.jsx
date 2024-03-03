import React from "react";

function QnA() {
  return (
    <div class="container">
      <div class="input-container">
        <input
          type="text"
          id="questionInput"
          placeholder="Enter your question..."
        />
        <button id="submitButton">Submit</button>
      </div>
      <div class="response-box" id="responseBox"></div>
    </div>
  );
}

export default QnA;
