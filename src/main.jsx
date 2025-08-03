import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/education",
        element: <Education />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
