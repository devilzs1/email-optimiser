import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx'
import './index.css'
import { HtmlContentProvider } from './context/HTMLContentContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <HtmlContentProvider>
        <App />
      </HtmlContentProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
