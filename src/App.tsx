import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Fan from "./components/Fan";
import FansList from "./components/FansList";

const App: React.FC = () => {
  return (
    <div>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<FansList />} />
            <Route path=":id" element={<Fan />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
