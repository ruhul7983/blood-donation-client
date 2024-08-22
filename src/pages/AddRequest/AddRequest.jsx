import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";

const AddRequest = () => {
    const bloodGroup = ['A+', "B+", "AB+", "O+", 'A-', "B-", "AB-", "O-"];
    const bag = [1, 2, 3, 4, 5];
    const district = ["Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Tangail", "Faridpur", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur", "Bogra", "Jaipurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira", "Barisal", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur", "Barguna", "Sylhet", "Moulvibazar", "Habiganj", "Sunamganj", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon", "Jamalpur", "Mymensingh", "Netrokona", "Sherpur"];

    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Need Blood | Add Request</title>
            </Helmet>
            <PageTitle heading={"Place a Blood Request"} subHeading={"Need blood? Place a request to get SMS of blood donors."}></PageTitle>
            <div className="w-2/3 mx-auto">
                <form >
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Select Blood Group *</span>
                        </div>
                    </label>
                    <select required className="border border-gray-200 w-full py-2 px-3">

                        <option disabled selected>Select Blood Group</option>
                        {
                            bloodGroup.map(blood => <option>{blood}</option>)
                        }
                    </select>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select Bag *</span>
                            </div>
                        </label>
                        <select required className="border border-gray-200 w-full py-2 px-3">

                            <option disabled selected>Select Bag</option>
                            {
                                bag.map(item => <option>{item}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select Date *</span>
                            </div>
                        </label>
                        <input required className="w-full my-2 py-2 px-3" type="date" name="" id="" />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select Mobile Number *</span>
                            </div>
                        </label>
                        <input required className="w-full my-2 py-2 px-3" placeholder="Mobile Number" type="number" name="" id="" />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Where you need. Select District *</span>
                            </div>
                        </label>
                        <select required className="border border-gray-200 w-full py-2 px-3">

                            <option disabled selected>Select District</option>
                            {
                                district.map(item => <option>{item}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Hospital Name *</span>
                            </div>
                        </label>
                        <input placeholder="Hospital Name"  className="w-full py-2 px-3"/>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Write Details *</span>
                            </div>
                        </label>
                        <textarea placeholder="Write details" rows={5} className="w-full py-2 px-3"></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRequest;