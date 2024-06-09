import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom"
import getRoutes from './auto-get-routes'
import { StrictMode, Suspense } from 'react'
import './global.css'

// ** auto get routes you can use **
let routes = getRoutes()

console.log(routes)

const App = () => {
  return useRoutes(routes)
}

// ** pages are lazy loaded, so remember to wrap with `Suspense` **
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={'page loading...'}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)