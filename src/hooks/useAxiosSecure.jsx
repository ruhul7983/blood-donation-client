import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true,
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth()
    axiosSecure.interceptors.response.use(function (response) {
        return response;
     },async (error) =>{
        const status = error.response.status;
        console.log(status);
        if(status === 401 || status === 403){
           await logOut();
           return navigate("/login")
        }
        return Promise.reject(error);
     })
    return axiosSecure;
};

export default useAxiosSecure;