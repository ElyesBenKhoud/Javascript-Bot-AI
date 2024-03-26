import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Header from "./components/UI/Header";
import ChatComponent from "./pages/ChatComponent";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "@mantine/core/styles.css";
import "./App.css";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/javascript-ai" element={<ChatComponent />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
