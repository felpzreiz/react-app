import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import Botao from './pages/App/Button.jsx'
import Card from './pages/App/Card.jsx'
import Bloco from './pages/App/Bloco.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bloco />
  </StrictMode>,
)
