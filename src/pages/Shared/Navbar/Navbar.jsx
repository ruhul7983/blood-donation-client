import { FaFacebook, FaGoogle, FaList, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li className="hover:translate-y-[3px] transition-all"><Link to={'/'}>Home</Link></li>
        <li className="hover:translate-y-[3px] transition-all"><Link to={'/about-us'}>About us</Link></li>
        <li className="hover:translate-y-[3px] transition-all"><Link to={'/'}>Find Donors</Link></li>
        <li className="hover:translate-y-[3px] transition-all"><Link to={'/'}>Add Blood Request</Link></li>
        <li className="hover:translate-y-[3px] transition-all"><Link to={'/'}>Login</Link></li>
  
    </>
    return (
        <div className="bg-red-600 h-28">
            <div className="max-w-6xl mx-auto p-3">
                {/* upper */}
                <div className="  flex justify-between">
                    <div className="flex gap-x-2 text-white">
                        <a href="https://www.facebook.com/ruhul1280" target="blank"><FaFacebook className="text-2xl hover:translate-y-[3px] transition-all"></FaFacebook></a>
                        <a href="https://www.youtube.com" target="blank"><FaYoutube className="text-2xl hover:translate-y-[3px] transition-all"></FaYoutube></a>
                        <a href="https://www.x.com" target="blank"><FaTwitter className="text-2xl hover:translate-y-[3px] transition-all"></FaTwitter></a>
                    </div>
                    <div className="text-white">Feel free to contact us</div>
                </div>
                {/* lower */}
                <div className="dropdown flex flex-row-reverse">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaList className="text-2xl text-white"></FaList>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <div className="-mt-9 md:mt-6">
                        <button className="w-14 hover:translate-y-[3px] transition-all "><img src="https://res.cloudinary.com/db4c4ud2n/image/upload/f_auto,q_auto/lzk0ixibi6qixckymjdj.png" alt="" /></button>
                    </div>
                    <div className="text-white">

                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 ">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;