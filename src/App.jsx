import React, { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
