import App from "./App";
import ErrorPage from "./components/error/ErrorPage";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
];

export default routes;
