import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const DonorDetails = () => {
    const loader = useLoaderData();
    const { name, bloodGroup, district, lastDonateDate, phone } = loader
    return (
        <div className="bg-white">
            <PageTitle heading={"User Details"} subHeading={"Contact blood donors"}></PageTitle>
            <div className="max-w-6xl mx-auto mb-3">
                <div className="flex gap-x-5">
                    <div>
                        <h1>Name : {name}</h1>
                        <h1>Blood Group : {bloodGroup}</h1>
                    </div>
                    <div>
                        <h1>District : {district}</h1>
                        <h1>Last Donate Date : {lastDonateDate}</h1>
                    </div>
                </div>
                <div className="mt-5">
                <a className="text-white font-semibold px-3 py-2 bg-zinc-950 rounded mt-3" href={`tel:${phone}`}>Call Now</a>
                </div>
            </div>
        </div>
    );
};

export default DonorDetails;