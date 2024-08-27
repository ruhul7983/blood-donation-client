import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true,
})

const useAxiosSecure = () => {
    // const navigate = useNavigate();
    // const {logOut}= useAuth();
    // axiosSecure.interceptors.request.use(function (config) {
    // //    const token = localStorage.getItem("access-token");
    // //    config.headers.authorization = `Bearer ${token}`;
       
    // //    return config;
    // }, async (error)=> {
       
    //    return Promise.reject(error);
    // })
 
    // //response 
 
    // axiosSecure.interceptors.response.use(function (response) {
    //    return response;
    // },async (error) =>{
    //    const status = error.response.status;
    //    console.log(status);
    //    if(status === 401 || status === 403){
    //       await logOut();
    //     //   return navigate("/login")
    //    }
    //    return Promise.reject(error);
    // })
    return axiosSecure;
 
 };
 
 export default useAxiosSecure;

