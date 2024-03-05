import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import LandingPage from "./pages/LandingPage";
import QnA from "./components/QnA";
import Header from "./components/UI/Header";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/javascript-ai" element={<QnA />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
