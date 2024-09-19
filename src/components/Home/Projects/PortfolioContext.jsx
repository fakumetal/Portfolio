import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [isPortfolioDeleted, setIsPortfolioDeleted] = useState(false);
  const [portfolioDeleteCount, setPortfolioDeleteCount] = useState(0);

  useEffect(() => {
    const checkPortfolioDeleted = () => {
      const deleted = localStorage.getItem('isPortfolioDeleted') === 'true';
      const storedCount = localStorage.getItem('portfolioDeleteCount') || '0';
      setIsPortfolioDeleted(deleted);
      setPortfolioDeleteCount(parseInt(storedCount, 10));
    };

    checkPortfolioDeleted();

    const handleStorageChange = () => {
      checkPortfolioDeleted();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updatePortfolioDeleteCount = useCallback((count) => {
    setPortfolioDeleteCount(count);
    localStorage.setItem('portfolioDeleteCount', count.toString());
  }, []);

  return (
    <PortfolioContext.Provider value={{
      isPortfolioDeleted,
      setIsPortfolioDeleted,
      portfolioDeleteCount,
      updatePortfolioDeleteCount
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
