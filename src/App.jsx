import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import { usePortfolio } from "./components/Home/Projects/PortfolioContext";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const { portfolioDeleteCount, isPortfolioDeleted } = usePortfolio();
  const [showGame, setShowGame] = useState(false);
  useEffect(() => setShowGame(portfolioDeleteCount >= 2), [portfolioDeleteCount]);
  return <div className={`app ${isPortfolioDeleted ? "portfolio-deleted" : ""}`}>
    {!showGame && <Header />}
    {showGame ? <Game onExit={() => window.location.reload()} /> : <main><Home /></main>}
  </div>;
};

export default App;
