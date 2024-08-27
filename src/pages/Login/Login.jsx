import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import auth from './../../assets/auth.gif';
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
const Login = () => {
    const {signIn} = useAuth();
    const [error,setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log("location ",from);
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(res=>{
            console.log(res.user);
            setError("");
            navigate(from,{replace:true});
        })
        .catch(err=>{
            setError("Please. Try again")
            console.log(err);
        })
    }
    return (
        <div className="bg-white">
            <PageTitle heading={"Login"} subHeading={"Please login here"}></PageTitle>
            <div className="flex  md:flex-row max-w-6xl mx-auto items-center">
                <div className="flex-1 hidden md:block">
                    <img className="w-96" src={auth} alt="" />
                </div>
                <div className="flex-1 px-8 md:px-0">
                    <h1 className="text-2xl">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="w-full md:flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Email *</span>
                                </div>
                            </label>
                            <input required className="w-full border py-2 px-3" type="email" placeholder="example@email.com" name="email" id="" />
                        </div>
                        <div className="w-full md:flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Password *</span>
                                </div>
                            </label>
                            <input required className="w-full border py-2 px-3" type="password" name="password" id="" placeholder="Enter your password"/>
                        </div>
                        <h1 className="text-red-600">{error}</h1>
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" name="" id="" />
                            <p>Remember Me</p>
                        </div>
                        <div>
                            <button className="w-full md:w-auto px-6 py-2 bg-red-600 text-white font-semibold rounded-sm shadow-lg hover:bg-black hover:text-white transition">Login</button>
                        </div>
                    </form>
                    <h1 className=" font-semibold ">Don't have an account? <Link className="hover:text-red-800" to={"/register"}>Sign up</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;