import { createRoot } from 'react-dom/client'
import './app/style/index.css'
import App from './app/ui/App.tsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
