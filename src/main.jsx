import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import Botao from './pages/App/Button.jsx'
import Card from './pages/App/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Botao />
    <Card />
  </StrictMode>,
)
