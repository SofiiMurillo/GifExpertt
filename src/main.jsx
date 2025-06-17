import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { GifExpert } from './GifExpert'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpert/>
  </StrictMode>,
)
