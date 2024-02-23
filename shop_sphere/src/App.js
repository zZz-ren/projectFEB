import CardContainer from "./Components/Card";
// import Categories from "./Components/Categories";
import LandingPage from "./Components/LandingPage";
// import Error from "./Pages/Error";
import Layout from "./Pages/Layout";
import ProductDetails from "./Pages/ProductDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <div>Pending</div>,
        },
        {
          path: "/products",
          element: <CardContainer />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return (
    <div className=" ">
      <RouterProvider router={router} />
      {/* <Products /> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
