import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import auth from './../../assets/auth.gif';
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const {createUser} = useAuth();
    const axios = useAxiosPublic();
    const navigate = useNavigate();
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        // createUser(email,password)
        // .then(res=>{
        //     console.log(res.user);
        //     if(res.user?.email){
        //         axios.post()
        //     }
        // })
        // .catch(err=>{
        //     console.log(err.message);
        // })
        navigate("/complete-profile",{state:{email:email,password:password}});
    }
    return (
        <div className="bg-white">
            <PageTitle heading={"Login"} subHeading={"Please login here"}></PageTitle>
            <div className="flex  md:flex-row max-w-6xl mx-auto items-center">
                <div className="flex-1 hidden md:block">
                    <img className="w-96" src={auth} alt="" />
                </div>
                <div className="flex-1 px-8 md:px-0">
                    <h1 className="text-2xl">Register</h1>
                    <form onSubmit={handleRegister}>
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
                        
                        <div>
                            <button className="w-full mt-2 md:w-auto px-6 py-2 bg-red-600 text-white font-semibold rounded-sm shadow-lg hover:bg-black hover:text-white transition">Register</button>
                        </div>
                    </form>
                    <h1 className=" font-semibold ">Already have an account? <Link className="hover:text-red-800" to={"/login"}>Login</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;