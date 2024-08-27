import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import auth from './../../assets/auth.gif';
import district, { bloodGroup } from "../../assets/data";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const CompleteProfile = () => {
    const { createUser,loading } = useAuth();
    const axios = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const { email, password } = location.state || {};
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const lastDonateDate = form.lastDonateDate.value;
        const phone = form.phone.value;

         createUser(email,password)
        .then(res=>{
            console.log(res.user);
            const userInfo = {email,name,bloodGroup,district,lastDonateDate};
            console.log(userInfo);
            if(res.user?.email){
                axios.post("/users",userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        navigate("/");
                    }
                })
            }
        })
        .catch(err=>{
            console.log(err.message);
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
                    <h1 className="text-2xl">Complete Profile</h1>
                    <form onSubmit={handleRegister}>
                        <div className="w-full md:flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Name *</span>
                                </div>
                            </label>
                            <input required className="w-full border py-2 px-3" type="text" placeholder="Ex. Ruhul" name="name" id="" />
                        </div>
                        <div className="w-full md:flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Phone *</span>
                                </div>
                            </label>
                            <input required className="w-full border py-2 px-3" type="number" placeholder="01545121345" name="phone" id="" />
                        </div>

                        <div>
                            <label className="form-control w-full md:max-w-xs">
                                <div className="label">
                                    <span className="label-text">Select Blood Group *</span>
                                </div>
                            </label>
                            <select required name="bloodGroup" className="border border-gray-200 w-full py-2 px-3">

                                <option disabled selected>Select Blood Group</option>
                                {
                                    bloodGroup.map(blood => <option>{blood}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Select District *</span>
                                </div>
                            </label>
                            <select name="district" required className="border border-gray-200 w-full py-2 px-3">

                                <option disabled selected>Select District</option>
                                {
                                    district.map(item => <option>{item}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Last Donate Date *</span>
                                </div>
                            </label>
                            <input required className="w-full border my-2 py-2 px-3" type="date" name="lastDonateDate" id="" />
                        </div>
                        <div>
                            <button className="w-full mt-2 md:w-auto px-6 py-2 bg-red-600 text-white font-semibold rounded-sm shadow-lg hover:bg-black hover:text-white transition">Complete Profile</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CompleteProfile;