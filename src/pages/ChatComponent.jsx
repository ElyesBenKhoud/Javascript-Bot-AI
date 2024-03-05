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
      <div class="sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:grid-rows-1 flex flex-col  items-center gap-10 sm:px-32">
        <div class="sm:col-span-2">
          <QnA question={question} setQuestion={setQuestion} />
        </div>
        <Suggestions handleSuggestionClick={handleSuggestionClick} />
      </div>
      <StaticNumber />
    </>
  );
}

export default ChatComponent;
