import React from "react";
import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "Answer for question that is related to javascript or reactJs or nextJS only if anything else just response with please ask me anything related to javscript or react or nextjs.",
};

function App() {
  return <div>App</div>;
}

export default App;
