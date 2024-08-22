import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";

const DonorList = () => {
    // TODO: Letter will convert into axios
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("/users.json")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[])
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="bg-red-600 pl-3 py-2 font-bold text-white my-4">Total Donor Found: {users.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-2">
                {/* Single */}
                {
                    users.map(user=><div className="flex items-center border-2 rounded hover:shadow-md hover:border-gray-400 transition-all">
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
                                <h1 className="font-semibold">{user.group}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1>District:</h1>
                                <h1 className="font-semibold">{user.district}</h1>
                            </div>
                        </div>
                    </div>)
                }
                
                

            </div>
        </div>
    );
};

export default DonorList;