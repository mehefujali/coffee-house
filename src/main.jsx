import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import SignalProvider from './context/SignalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignalProvider>
    <RouterProvider router={routes}></RouterProvider>
    </SignalProvider>
  </StrictMode>,
)
