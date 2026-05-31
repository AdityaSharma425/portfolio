import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initInputMode } from './hooks/useInputMode'
import { initPerformanceProfile } from './hooks/usePerformanceProfile'
import './index.css'

initInputMode()
initPerformanceProfile()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
