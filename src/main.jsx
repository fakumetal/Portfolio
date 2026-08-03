import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PortfolioProvider } from "./components/Home/Projects/PortfolioContext";
import { LanguageProvider } from "./i18n/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </LanguageProvider>
  </StrictMode>
);
