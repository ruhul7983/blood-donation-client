import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddRequest from "../pages/AddRequest/AddRequest";
import FindDonors from "../pages/FindDonors/FindDonors";
import Login from "../pages/Login/Login";
import Test from "../pages/Test/Test";
import Register from "../pages/Register/Register";
import CompleteProfile from "../pages/Register/CompleteProfile";

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
        {
            path:"/find-donors",
            element:<FindDonors></FindDonors>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>,
        },
        {
            path:"/complete-profile",
            element:<CompleteProfile></CompleteProfile>,
        },
        {
            path:"/test",
            element:<Test></Test>,
        },
      ]
    },
  ]);

export default router;