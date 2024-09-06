import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Note from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Note />
  </StrictMode>,
)
