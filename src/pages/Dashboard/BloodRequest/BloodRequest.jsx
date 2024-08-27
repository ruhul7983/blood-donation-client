import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PageTitle from "../../components/PageTitle";
import useAuth from "../../../hooks/useAuth";

const BloodRequest = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: request = []} = useQuery({
        queryKey:['request'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/blood-request?email=${user.email}`)
            return res.data;
        }
    }) 
    return (
        <div className="bg-white">
            <PageTitle heading={"Blood Request"} subHeading={request.length}></PageTitle>
            {
                
            }
        </div>  
    );
};

export default BloodRequest;