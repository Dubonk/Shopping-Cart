import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/input.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './routes.jsx'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

