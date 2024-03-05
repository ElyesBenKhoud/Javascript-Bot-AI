import React from "react";

function Suggestions({ handleSuggestionClick }) {
  return (
    <div class="text-black py-16 px-10 lg:px-8 rounded-lg shadow-md bg-gradient-to-tr from-yellow-300 via-yellow-100 to-gray-100 min-w-72 min-w-300  flex flex-col gap-4 ">
      <button
        className="response-box w-full"
        onClick={() =>
          handleSuggestionClick("How Can I learn Javascript from scratch ?")
        }
      >
        How Can I learn Javascript from scratch ?
      </button>

      <button
        className="response-box w-full"
        onClick={() =>
          handleSuggestionClick("How Can I learn React from scratch ?")
        }
      >
        How Can I learn React from scratch ?
      </button>

      <button
        className="response-box w-full"
        onClick={() =>
          handleSuggestionClick("How Can I learn Nexjs from scratch ?")
        }
      >
        How Can I learn Nexjs from scratch ?
      </button>

      <button
        className="response-box w-full"
        onClick={() =>
          handleSuggestionClick(
            "Explain the difference between JavaScript, HTML and CSS?"
          )
        }
      >
        Explain the difference between JavaScript, HTML and CSS?
      </button>
    </div>
  );
}

export default Suggestions;
