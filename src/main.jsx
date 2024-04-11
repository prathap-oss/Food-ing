import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('Root')).render(
<BrowserRouter>
<StoreContextProvider>
<App />
</StoreContextProvider>
</BrowserRouter>
    
  
)
