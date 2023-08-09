import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/home" element={<p>Home</p>} />
          <Route path="/shap" element={<p>Shap</p>} />
          <Route path="/aboutus" element={<p>About Us</p>} />
          <Route path="/contactus" element={<p>Contact Us</p>} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
