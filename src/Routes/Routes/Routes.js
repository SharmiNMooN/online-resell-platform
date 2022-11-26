import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Auth/Login/Login";
import Register from "../../pages/Auth/Register/Register";
import Blog from "../../pages/Blog/Blog";
import CategoryWiseProduct from "../../pages/CategoryWiseProduct/CategoryWiseProduct";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../pages/Dashboard/Dashboard";
import AddProduct from "../../pages/AddProduct/AddProduct";
import MyProduct from "../../pages/MyProduct/MyProduct";
import MyBuyer from "../../pages/MyBuyer/MyBuyer";

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
        path: "/category/:categoryId",
        element: (
          <PrivateRoute>
            <CategoryWiseProduct></CategoryWiseProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-products",
        element: (
            <PrivateRoute>
              <MyProduct></MyProduct>
            </PrivateRoute>
        ),
      },
      {
        path: "/my-buyers",
        element: (
            <PrivateRoute>
              <MyBuyer></MyBuyer>
            </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
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
