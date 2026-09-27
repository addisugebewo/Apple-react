import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./assets/css/bootstrap.css"
import "./assets/css/styles.css"

createRoot(document.getElementById('root')).render(  // StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  <StrictMode>
    <App />
  </StrictMode>,
)
