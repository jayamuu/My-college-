import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* whenver we sur link mandotory to wrapp appin side the browser router */}
  <BrowserRouter>
  <App/>
  </BrowserRouter>  



    
  </StrictMode>,
)
