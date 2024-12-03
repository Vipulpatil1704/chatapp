import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ConversationContextProvider } from './context/ConversatonContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConversationContextProvider>
        <AuthContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>       
        </AuthContextProvider>
      </ConversationContextProvider>

    </BrowserRouter>

  </StrictMode>,
)
