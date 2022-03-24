import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Char from "./components/Char";
import CharsList from "./components/CharsList";

const App: React.FC = () => {
  return (
    <div>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<CharsList />} />
            <Route path=":id" element={<Char />} />
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
