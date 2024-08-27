import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import useAuth from "../hooks/useAuth";

const Main = () => {
    const [loading,setLoading] = useState(false);
    // const {loading} = useAuth();
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500);
    //   }, []);
    
    
    return (
        loading?<SplashScreen></SplashScreen>:
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;