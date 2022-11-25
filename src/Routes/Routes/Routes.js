import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Auth/Login/Login";
import Register from "../../pages/Auth/Register/Register";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`${process.env.REACT_APP_SERVER_BASEURL}/categories`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
