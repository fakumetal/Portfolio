import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PortfolioProvider } from './components/Home/Projects/PortfolioContext'; // Importa el provider aquí

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioProvider> {/* Envuelve toda la aplicación con el PortfolioProvider */}
      <App />
    </PortfolioProvider>
  </StrictMode>,
);
