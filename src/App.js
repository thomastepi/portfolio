import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {
  Home,
  PrivacyPolicyPage,
} from "./scenes";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Layout>
    </Router>
  );

}

export default App;