import { FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import blood from './../../../../public/blood.png';
const OurNetworks = () => {
    return (
        <div className="max-w-6xl mx-auto my-9">
            <h1 className="text-4xl text-center my-4">Our Networks</h1>
            <div className="flex flex-col md:flex-row justify-evenly">
                <div className="text-center flex flex-col items-center">
                    <FaUsers className="text-red-600 text-8xl"></FaUsers>
                    <h1 className="text-xl font-semibold">400 Donors</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                   <FaLocationDot className="text-red-600 text-8xl"></FaLocationDot>
                    <h1 className="text-xl font-semibold">64 Districts</h1>
                </div> 
                <div className="text-center flex flex-col items-center">
                    <img className="w-24 ml-5" src={blood} alt="" />

                    <h1 className="text-xl font-semibold">8 Blood Groups</h1>
                </div>
            </div>
        </div>
    );
};

export default OurNetworks;