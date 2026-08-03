/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [isPortfolioDeleted, setIsPortfolioDeleted] = useState(false);
  const [portfolioDeleteCount, setPortfolioDeleteCount] = useState(0);
  useEffect(() => {
    const deleted = localStorage.getItem("isPortfolioDeleted") === "true";
    const count = Number.parseInt(localStorage.getItem("portfolioDeleteCount") || "0", 10);
    setIsPortfolioDeleted(deleted);
    setPortfolioDeleteCount(count);
  }, []);
  const updatePortfolioDeleteCount = (count) => {
    setPortfolioDeleteCount(count);
    localStorage.setItem("portfolioDeleteCount", String(count));
  };
  return <PortfolioContext.Provider value={{ isPortfolioDeleted, setIsPortfolioDeleted, portfolioDeleteCount, updatePortfolioDeleteCount }}>{children}</PortfolioContext.Provider>;
};

export const usePortfolio = () => useContext(PortfolioContext);
