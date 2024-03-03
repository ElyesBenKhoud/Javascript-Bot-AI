import React from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import Chat from "./components/Chat";
import Header from "./components/Header";
import QnA from "./components/QnA";

function App() {
  return (
    //seperate the screen into halves !
    //left side will be suggestion
    //right side will be chat
    //make it responsive such in smaller screens chat goes below the suggestion
    <div>
      <Header />
      <div className="content">
        <div>
          <QnA />
        </div>
        <div>{/* <Chat /> */}</div>
      </div>
    </div>
  );
}

export default App;
