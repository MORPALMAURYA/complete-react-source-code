import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './screens/Home.jsx'
import { AppRouter } from './router/AppRouter.jsx'
import { RouterProvider } from 'react-router'



createRoot(document.getElementById('root')).render(
<RouterProvider router={AppRouter}/>
)
