// src/App.js

import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Header from "./components/Header/Header";
import { usePortfolio } from "./components/Home/Projects/PortfolioContext";
import Game from "./components/Game/Game";
import { CSSTransition, TransitionGroup } from "react-transition-group";
 
const App = () => {
  const { isPortfolioDeleted, portfolioDeleteCount } = usePortfolio();
  const [showGame, setShowGame] = useState(false);
  const nodeRef = useRef(null);  

  useEffect(() => {
    if (portfolioDeleteCount >= 2) {
      setShowGame(true);
    } else {
      setShowGame(false);
    }
  }, [portfolioDeleteCount]);

  const appStyle = {
    backgroundColor: isPortfolioDeleted ? "black" : "#242424",
    transition: "background-color 1s ease",
  };

  return (
    <div style={appStyle} className="app">
      {!showGame && <Header />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition
                  nodeRef={nodeRef}  
                  key={showGame ? 'game' : 'home'}
                  timeout={1500}
                  classNames="fade"
                  unmountOnExit
                >
                  <div ref={nodeRef}>  
                    {showGame ? <Game /> : <Home />}
                  </div>
                </CSSTransition>
              </TransitionGroup>
            }
          />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
