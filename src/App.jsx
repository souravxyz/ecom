import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Layout/Home/Home";

import { Layout } from "./components/Layout/Layout";
import ContactUs from "./components/pages/Contact/ContactUs";
import Product from "./components/pages/Products/Product";
import { Cart } from "./components/pages/Cart/Cart";
import { store } from "./components/Redux/Store";
import { Provider } from "react-redux";
import { SignUp } from "./components/pages/SignUp/SignUp";
import About from "./components/pages/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/about",
          element: <About/>
        },
      ],
    },
  ]);

  return (
    <>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
