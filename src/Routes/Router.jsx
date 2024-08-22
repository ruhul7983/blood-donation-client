import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddRequest from "../pages/AddRequest/AddRequest";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/about-us",
            element:<AboutUs></AboutUs>,
        },
        {
            path:"/add-request",
            element:<AddRequest></AddRequest>,
        },
      ]
    },
  ]);

export default router;