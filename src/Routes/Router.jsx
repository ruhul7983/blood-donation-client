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
import PrivateRoutes from "./PrivateRoutes";
import DonorDetails from "../pages/Home/DonorList/DonorDetails";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import BloodRequest from "../pages/Dashboard/BloodRequest/BloodRequest";

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
            element:<PrivateRoutes><AddRequest></AddRequest></PrivateRoutes>,
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
            path:"/user-details/:id",
            element:<DonorDetails></DonorDetails>,
            loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
        },
        {
            path:"/test",
            element:<Test></Test>,
        },
      ]
    },
    
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"admin-home",
                element:<AdminHome></AdminHome>
            },
            {
                path:"request-blood",
                element:<BloodRequest></BloodRequest>
            },
        ]
    }
  ]);

export default router;