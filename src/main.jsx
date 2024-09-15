import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyContext } from './MyContext.jsx'

const apikey = '31bf4dccd3d1716c9554052e554319a7';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MyContext.Provider value={{apikey}}>
    <App />
    </MyContext.Provider>
  </StrictMode>,
)
