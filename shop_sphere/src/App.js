import CardContainer from "./Components/Card";
// import Categories from "./Components/Categories";
import LandingPage from "./Components/LandingPage";
// import Error from "./Pages/Error";
import Layout from "./Pages/Layout";
import ProductDetails from "./Pages/ProductDetails";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Table, } from "./Pages/Table";
import Categories from './Components/Categories'
import Error from "./Pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <Error />
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
        {
          path: '/categories',
          element: <Categories />
        }
      ]
    },
    {
      path: '/admin',
      children: [
        {
          path: 'upload',
          element: <Table />
        }
      ]
    }
  ])

  return <div className=" ">

    <RouterProvider router={router} />
    {/* <Products /> */}
    {/* <LandingPage /> */}

  </div>
}

export default App;
