import { Link } from "react-router-dom";

const AboutNeedBlood = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between p-3">
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-bold">What is Need Blood?</h1>
                    <p>Need Blood is an automated blood service that connects blood searchers with voluntary donors in a moment through Email. Need Blood is always a free service for all.</p>
                </div>
                <div className="md:w-1/2 md:ml-28">
                    <h1 className="text-2xl font-bold">Why Need Blood?</h1>
                    <ol type="">
                        <li>100% Automated</li>
                        <li>Always free</li>
                        <li>24×7 service</li>
                        <li>All data is secured</li>
                    </ol>
                </div>

            </div>
            <div className="text-center my-3"><Link to={'/about-us'} className="px-4 py-2 rounded-md font-semibold bg-red-600 shadow-lg text-white hover:bg-black hover:text-white transition">Learn more</Link></div>
        </div>
    );
};

export default AboutNeedBlood;