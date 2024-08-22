import '../AboutUs/About.css'

const PageTitle = ({heading,subHeading}) => {
    return (
        <div>
            <div className="bg-about">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold py-5">{heading}</h1>
                    <p>{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;