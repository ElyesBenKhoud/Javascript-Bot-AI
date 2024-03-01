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
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me about Javascript!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  return <div>App</div>;
}

export default App;
