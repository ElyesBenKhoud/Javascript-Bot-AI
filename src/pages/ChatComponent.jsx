import React, { useState, lazy, Suspense } from "react";
// import QnA from "../components/QnA";
import StaticNumber from "../components/UI/StaticNumber";
import Suggestions from "../components/Suggestions";
import Spinner from "../components/UI/Spinner";

const QnA = lazy(() => import("../components/QnA"));

function ChatComponent() {
  const [question, setQuestion] = useState("");

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
  };

  //TODO Design QnA and Suggestions components

  return (
    <>
      <div className="sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:grid-rows-1 flex flex-col  items-start gap-10 sm:px-32 flex-grow ">
        <Suspense fallback={<Spinner />}>
          <div className="sm:col-span-2 w-screen md:w-auto">
            <QnA question={question} setQuestion={setQuestion} />
          </div>

          <div>
            <Suggestions handleSuggestionClick={handleSuggestionClick} />
          </div>
        </Suspense>
      </div>

      <StaticNumber />
    </>
  );
}

export default ChatComponent;
