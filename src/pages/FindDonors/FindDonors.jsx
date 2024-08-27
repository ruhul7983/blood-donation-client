import { CiUser } from "react-icons/ci";
import district, { bloodGroup, getTodayDate } from "../../assets/data";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import UserComponent from "../components/UserComponent";

const FindDonors = () => {
    const axiosPublic = useAxiosPublic();
    const [donors, setDonors] = useState([]);
    const handleFindDonor = (e) => {
        e.preventDefault();
        const form = e.target;
        const bloodGroup = form.bloodGroup.value;
        const bloodNeedDate = form.bloodNeedDate.value;
        const district = form.district.value;
        const type = form.type.value;
        const find = { bloodGroup, bloodNeedDate, district, type };
        console.log(bloodGroup);
        axiosPublic.get(`/find-donors?bloodGroup=${encodeURIComponent(bloodGroup)}&district=${district}`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data);
                setDonors(res.data);
            })
    }
    return (
        <div className="px-4 md:px-0"> {/* Add padding for mobile screens */}
            <form onSubmit={handleFindDonor} className="bg-[#fcdfdf] py-5">
                <div className="flex flex-col md:flex-row  md:max-w-6xl mx-auto gap-4 items-center"> {/* Adjusted gap */}
                    <div className="w-full md:flex-1"> {/* Ensure full width on mobile */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select Blood Group *</span>
                            </div>
                        </label>
                        <select required name="bloodGroup" className="border border-gray-200 w-full py-2 px-3">
                            <option disabled selected>Select Blood Group</option>
                            {bloodGroup.map(blood => <option key={blood}>{blood}</option>)}
                        </select>
                    </div>
                    <div className="w-full md:flex-1"> {/* Ensure full width on mobile */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select District *</span>
                            </div>
                        </label>
                        <select name="district" required className="border border-gray-200 w-full py-2 px-3">
                            <option disabled selected>Select District</option>
                            {district.map(item => <option key={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="w-full md:flex-1"> {/* Ensure full width on mobile */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select Date *</span>
                            </div>
                        </label>
                        <input required className="w-full border py-2 px-3" type="date" name="bloodNeedDate" id="" min={getTodayDate()} />
                    </div>
                    <div className="w-full md:flex-1"> {/* Ensure full width on mobile */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Type *</span>
                            </div>
                        </label>
                        <select name="type" required className="border border-gray-200 w-full py-2 px-3">
                            <option>All</option>
                            <option>Eligible</option>
                        </select>
                    </div>
                    <div className="w-full md:w-auto mt-4 md:mt-9"> {/* Adjust width for button */}
                        <button className="w-full md:w-auto px-6 py-2 bg-red-600 text-white font-semibold rounded-sm shadow-lg hover:bg-black hover:text-white transition">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <div className="max-w-6xl mx-auto">
                <h1 className="bg-red-600 pl-3 py-2 font-bold text-white my-4">Total Donor Found: {donors?.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-2">
                    {
                        donors.map(user => <UserComponent key={user._id} user={user}></UserComponent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FindDonors;
