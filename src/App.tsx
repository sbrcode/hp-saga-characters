import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Fan from "./components/Fan";
import FansList from "./components/FansList";

const App: React.FC = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
        </div>
      </nav> */}
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<FansList/>} />
          <Route path="/:id" element={<Fan/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
