import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PortfolioProvider } from './components/Home/Projects/PortfolioContext';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioProvider> 
      <App />
    </PortfolioProvider>
  </StrictMode>,
);
