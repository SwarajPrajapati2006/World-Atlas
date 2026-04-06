import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import "./App.css"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Country from './pages/Country'
import CountryDetail from './pages/CountryDetail'
import ErrorPage from "./pages/ErrorPage"
import AppLayout from './components/AppLayout'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "country/:name",
        element: <CountryDetail />
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App