import "../tools/assets/App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routing/Routes";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
