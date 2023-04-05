import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import About from "./pages/About";
import Cocktails from "./pages/Cocktails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./style.scss"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/cocktails",
        element: <Cocktails />
      },
    ]

  },
  {
    path: "/about",
    element: <About />

  },
  {
    path: "/cocktails",
    element: <Cocktails />

  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
