import { Helmet } from "react-helmet";
import './About.css'
const AboutUs = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Need Blood | About us</title>
            </Helmet>
            <div>
                <div className="bg-about">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl font-bold py-5">About us</h1>
                        <p>To know more about us</p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto flex flex-col  md:flex-row gap-x-16 mt-4">
                    <div className="w-1/2">
                        <p>Need Blood is an automated blood service that connect blood searchers with voluntary blood donors in a moment through Email and website. Need Blood is a free service for all. Need Blood started its journey in 2018.</p>
                        <h1 className="text-2xl font-semibold">Why Need Blood?</h1>
                        <p>
                            Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. As a result, people fall in real trouble to manage blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. The communication gap is resulting in the loss of many lives.
                        </p>
                        <br />
                        <p> Need Blood comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Need Blood services can also be availed by SMS, people from any class of the society can easily avail of Need Blood services.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Vision</h1>
                        <p>Ensuring no more death just for the need of blood</p>
                        <h1 className="text-2xl font-semibold">Mission</h1>
                        <p>Connecting blood searchers with voluntary blood donors in a moment with the use of technology.</p>
                        <h1 className="text-2xl font-semibold">Objectives</h1>
                        <ol>
                            <li>Encouraging voluntary blood donation</li>
                            <li>Creating awareness about safe blood transfer</li>
                            <li>Enabling people to place blood request via SMS, website, or facebook</li>
                            <li>Connecting voluntary blood donors via SMS or email</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;