import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
)
