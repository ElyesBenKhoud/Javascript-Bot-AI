import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const systemMessage =
  "I will have the pleasure to help you with any questions related to JavaScript as a programming language or any framework or library that works with JavaScript.";

function QnA() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    if (question.trim() === "") return;

    setLoading(true); // Activate loader

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: question },
      ],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch response from server.");
      }

      const responseData = await response.json();
      const chatGPTResponse = responseData.choices[0].message.content;
      setResponse(chatGPTResponse);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Deactivate loader
    }
  };

  // Function to render response content
  // Function to render response content
  // Function to render response content
  // Function to render response content
  // Function to render response content
  const renderResponseContent = () => {
    // Split response by new line character to get individual lines
    const lines = response.split("\n");

    // Check if response contains bullet points or numbered steps
    if (lines.some((line) => /^\d+\.|\*/.test(line.trim()))) {
      return (
        <ul>
          {lines.map((line, index) => {
            // Check if the line starts with a number followed by a dot or a bullet point
            const regex = /^\d+\.\s|\*/;
            if (regex.test(line.trim())) {
              return <li key={index}>{line.trim()}</li>;
            } else {
              return null; // Ignore lines that don't start with a number followed by a dot or a bullet point
            }
          })}
        </ul>
      );
    } else if (response.includes("```")) {
      // Check if response contains a code block
      // If it does, format it with <pre> and <code> tags
      const formattedResponse = response.replace(
        /```(.*)\n([\s\S]*?)\n```/g,
        (match, language, code) => (
          <pre key={language}>
            <code className={`language-${language.trim()}`}>{code.trim()}</code>
          </pre>
        )
      );
      return formattedResponse;
    } else {
      // If no numbered steps, bullet points, or code blocks detected, render response as a paragraph
      return <p>{response}</p>;
    }
  };

  return (
    <div className="bg-gray-200  py-16 px-4 lg:px-8 w-full">
      <div className="mx-auto space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center flex-col">
        <div className="input-container  flex flex-col gap-6">
          <input
            type="text"
            id="questionInput"
            placeholder="Enter your question..."
            value={question}
            onChange={handleQuestionChange}
            className="w-full sm:w-auto"
          />
          <button
            id="submitButton"
            onClick={handleSubmit}
            className="mt-2 sm:mt-0 sm:ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <div className="response-box" id="responseBox">
            {loading ? (
              <p>Loading...</p>
            ) : (
              response && renderResponseContent() && <p>{response}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QnA;
