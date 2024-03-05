import React, { useState } from "react";
import QnA from "../components/QnA";
import StaticNumber from "../components/UI/StaticNumber";
import Suggestions from "../components/Suggestions";

function ChatComponent() {
  const [question, setQuestion] = useState("");

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
  };

  return (
    <>
      <div className="sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:grid-rows-1 flex flex-col  items-start gap-10 sm:px-32">
        <div className="sm:col-span-2">
          <QnA question={question} setQuestion={setQuestion} />
        </div>
        <div>
          <Suggestions handleSuggestionClick={handleSuggestionClick} />
        </div>
      </div>
      <StaticNumber />
    </>
  );
}

export default ChatComponent;
