import blood from "./../../../public/blood.png";
import './backgroundSplash.css'
const SplashScreen = () => {
    return (
        <div className="backgroundSplash">
            <div className="flex flex-col min-h-screen justify-center items-center">
                <img className="w-20" src={blood} alt="" />
                <div className="flex items-center flex-row mt-4">
                    <h1 className="font-semibold text-2xl">Need Blood is loading  </h1>
                    <span className="loading loading-dots loading-sm"></span>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;