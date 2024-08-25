import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import district, { bloodGroup, getTodayDate } from "../../assets/data";


const AddRequest = () => {
    const bag = [1, 2, 3, 4, 5];

    

    const axiosPublic = useAxiosPublic();
    const handleAddRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const bloodGroup = form.bloodGroup.value;
        const bag = form.bag.value;
        const bloodNeedDate = form.bloodNeedDate.value;
        const contact = form.contact.value;
        const district = form.district.value;
        const hospitalName = form.hospitalName.value;
        const details = form.details.value;

        // Prepare the requestDetails object here
        const requestDetails = {
            bloodGroup, bag, bloodNeedDate, contact, district, hospitalName, details
        }

        // Now, you can use SweetAlert to confirm the submission
        Swal.fire({
            title: "Are you sure to send request?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Ensure you are using the correct axios instance
                console.log(requestDetails);
                await axiosPublic.post("/blood-request", requestDetails)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Your blood request ${bloodGroup} is successfully submitted`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.error("There was an error submitting the blood request:", error);
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "Failed to submit the request",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            }
        });
    }


    return (
        <div className="bg-white">
            <Helmet>
                <title>Need Blood | Add Request</title>
            </Helmet>
            <PageTitle heading={"Place a Blood Request"} subHeading={"Need blood? Place a request to get SMS of blood donors."}></PageTitle>
            <div className="w-4/5 md:w-2/4 mx-auto">
                <form onSubmit={handleAddRequest}>
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
                                <span className="label-text">Select Bag *</span>
                            </div>
                        </label>
                        <select name="bag" required className="border border-gray-200 w-full py-2 px-3">

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
                        <input required className="w-full border my-2 py-2 px-3" type="date" name="bloodNeedDate" id="" min={getTodayDate()} />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select Mobile Number *</span>
                            </div>
                        </label>
                        <input required className="w-full border my-2 py-2 px-3" placeholder="Mobile Number" type="number" name="contact" id="" />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Where you need. Select District *</span>
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
                                <span className="label-text">Hospital Name *</span>
                            </div>
                        </label>
                        <input name="hospitalName" placeholder="Hospital Name" className="w-full border py-2 px-3" />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Write Details *</span>
                            </div>
                        </label>
                        <textarea name="details" placeholder="Write details" rows={5} className="w-full border py-2 px-3"></textarea>
                    </div>
                    <div className="text-center my-3">
                        <button className="px-3 py-2 rounded bg-red-600 shadow-lg text-white hover:bg-black hover:text-white transition">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddRequest;