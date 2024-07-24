import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";

import './App.css'

function App() {

  //creates Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    {
      path: "/cart/:id",
      element: <><Cart /></>
    },
    {
      path: "/about",
      element: <><About /></>
    }


  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
