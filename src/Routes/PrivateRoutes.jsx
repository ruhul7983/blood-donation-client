import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SplashScreen from "../pages/SplashScreen/SplashScreen";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    if(loading){
       return <SplashScreen></SplashScreen>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;