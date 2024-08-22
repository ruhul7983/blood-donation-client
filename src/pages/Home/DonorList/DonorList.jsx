import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DonorList = () => {
    // Letter will convert into axios
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemPerPage, setItemPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [startPage, setStartPage] = useState(0);
    const [visiblePageCount, setVisiblePageCount] = useState(6); 

    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`/users/?page=${currentPage}&size=${itemPerPage}`)
            .then(res => {
                setUsers(res.data.result);
                setTotalUsers(res.data.count)
                setLoading(false);
            });

    }, [currentPage,itemPerPage]);
    const numberOfPages = Math.ceil(totalUsers / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    const currentVisiblePages = pages.slice(startPage, startPage + visiblePageCount);
    const handleItemsPerPage = (e) => {
        console.log(e.target.value);
        const val = parseInt(e.target.value);

        setItemPerPage(val);
        setCurrentPage(0);
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            if (currentPage === startPage && startPage > 0) {
                setStartPage(startPage - visiblePageCount);
            }
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
            if (currentPage === startPage + visiblePageCount - 1 && startPage + visiblePageCount < numberOfPages) {
                setStartPage(startPage + visiblePageCount);
            }
        }
    }
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="bg-red-600 pl-3 py-2 font-bold text-white my-4">Total Donor Found: {users.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-2">
                {/* Single */}
                {
                    loading ? <>
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-32 w-full"></div>
                    </>
                        : users.map(user => <div key={user._id} className="flex items-center border-2 rounded hover:shadow-md hover:border-gray-400 transition-all">
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
            <div className="text-center my-4">

                <div className="">
                    {
                        currentPage===0? "":<button className="text-blue-800" onClick={handlePreviousPage}>Previous</button>
                    }
                    {
                        currentVisiblePages.map(page => <button  onClick={() => setCurrentPage(page)} className={page === currentPage ? "join-item btn btn-md btn-active " : "join-item btn btn-md m-2" }>{page+1}</button>)
                    }
                    
                    {
                        currentPage+1===numberOfPages?"":<button className="text-blue-800" onClick={handleNextPage}>Next</button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default DonorList;