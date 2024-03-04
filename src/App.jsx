import React from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import Chat from "./components/Chat";
import QnA from "./components/QnA";
import FreqQ from "./components/FreqQ";
import LandingPage from "./components/LandingPage";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";

function App() {
  return (
    //seperate the screen into halves !
    //left side will be suggestion
    //right side will be chat
    //make it responsive such in smaller screens chat goes below the suggestion
    <div>
      <LandingPage />

      {/* <QnA /> */}
      <Cards />
      <Reviews />
      <FreqQ />
    </div>
  );
}

export default App;
