import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";

import LandingPage from "./pages/LandingPage";
import Header from "./components/UI/Header";
import ChatComponent from "./pages/ChatComponent";
import Switcher from "./components/UI/Switcher";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/javascript-ai" element={<ChatComponent />} />
        </Routes>
        <Switcher />
      </>
    </Router>
  );
}

export default App;
