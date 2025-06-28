import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-[#818582]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white  ${selectedUser ? "max-md:hidden" : "" } `}> 
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40" />
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-w-5 cursor-pointer"
            />
            <div className="absolute top-full right-0 z-20 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block ">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm "
              >
                Edit profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>

        <div className="bg-[#282142] rounded-full">
            <img src={assets.search_icon} alt="" className="w-3" />
            <input type="text" className="bg-transparent border-none outline-none text-white text-xs placeholder:-[#c8c8c8] flex-1 " placeholder="Search User..." />
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
