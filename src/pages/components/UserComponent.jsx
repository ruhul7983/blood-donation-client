import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const UserComponent = ({ user }) => {
    return (
        <Link to={`/user-details/${user._id}`}>
            <div className="flex items-center border-2 rounded hover:shadow-md hover:border-gray-400 transition-all">
                <div>
                    <CiUser className="text-9xl text-red-600"></CiUser>
                </div>

                <div>
                    <div className="flex gap-x-2 justify-between">
                        <h1>Name:</h1>
                        <h1 className="font-semibold">{user.name}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>Group:</h1>
                        <h1 className="font-semibold">{user.bloodGroup}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>District:</h1>
                        <h1 className="font-semibold">{user.district}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default UserComponent;