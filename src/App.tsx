import React from 'react';
import { Routes, Route } from "react-router-dom";
import Char from "./components/Char";
import CharsList from "./components/CharsList";
import { StyledMain } from "./themes/Styles";

const App: React.FC = () => {
  return (
    <StyledMain>
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
    </StyledMain>
  );
}

export default App;
