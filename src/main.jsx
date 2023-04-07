import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import './styles.css'
// Cambios
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
)
