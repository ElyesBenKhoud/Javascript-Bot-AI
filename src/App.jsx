import React from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import Chat from "./components/Chat";

function App() {
  return (
    //seperate the screen into halves !
    //left side will be suggestion
    //right side will be chat
    //make it responsive such in smaller screens chat goes below the suggestion
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
