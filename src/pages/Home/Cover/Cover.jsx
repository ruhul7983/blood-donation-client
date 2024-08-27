import { Link } from 'react-router-dom';
import './background.css';
import useAuth from '../../../hooks/useAuth';
const Cover = () => {
    const {user} = useAuth();
    return (
        <div className="background">
            <div className='max-w-6xl p-4 md:p-0 mx-auto'>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-600'>Email-based platform to connect blood searchers with donors</h1>
                <p className='my-4'>Need Blood is a real-time free platform to help blood searchers connect voluntary blood donors around Bangladesh.</p>
                <div className="flex flex-row gap-x-2">
                    {
                        user?<Link className='px-4 py-2 rounded-md font-semibold bg-red-600 shadow-md text-white'>You are donor now</Link>:
                        <Link to={"/register"} className='px-4 py-2 rounded-md font-semibold bg-red-600 shadow-md text-white'>Join as donor</Link>
                    }
                    <Link to={"/find-donors"} className='px-4 py-2 rounded-md font-semibold bg-white shadow-md text-red-500'>Find Donors</Link>
                </div>
            </div>
        </div>
    );
};  

export default Cover;