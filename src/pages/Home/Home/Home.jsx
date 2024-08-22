import { Helmet } from "react-helmet";

import AboutNeedBlood from "../AboutNeedBlood/AboutNeedBlood";
import Cover from "../Cover/Cover";
import DonorList from "../DonorList/DonorList";
import OurNetworks from "../OurNetworks/OurNetworks";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Need Blood | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            
            <Cover></Cover>
            <AboutNeedBlood></AboutNeedBlood>
            <OurNetworks></OurNetworks>
            <DonorList></DonorList>
        </div>
    );
};

export default Home;