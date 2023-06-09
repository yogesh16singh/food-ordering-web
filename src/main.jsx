import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './pages/Error.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/cart.jsx'
import Body from './components/Body.jsx'
import RestaurentDetail from './pages/RestaurentDetail.jsx'
import Profile from './components/Profile'
import Shimmer from './components/Shimmer.jsx'



const About = lazy(() => import("./pages/About.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer />}>
          <About />
        </Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile></Profile>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/restaurentDetail/:id",
        element: <RestaurentDetail></RestaurentDetail>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>
)
