import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './services/Router'

createRoot(document.getElementById('root')!).render(
  <Router />
)
