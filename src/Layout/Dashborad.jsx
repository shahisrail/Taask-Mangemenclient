import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthProbider/AuthProvider";

const Dashborad = () => {
  const { signout,user } = useContext(AuthContext)
  const handelSignout = () => {
    signout()
      .then(() => {
        // logut was successful
        Swal.fire({
          icon: "success",
          title: "wow great your logout",
        });
      })
      .catch((error) => {
        // An error occurred during logout
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-64 min-h-screen bg-[#FCF3DD]">
        <ul className="menu p-4 ">
       { user && <li className="flex items-center gap-2 ">
            <NavLink to="/dashboard/maketodo">
            + Add new Task
            </NavLink>
          </li>}
       { user && <li className="flex items-center gap-2 ">
            <NavLink to="/dashboard/notificatoin">
          Notificatoin
            </NavLink>
          </li>}

          <div className="divider"></div>

          {/* shared navlinks */}
          <li className="flex items-center gap-2 ">
            <NavLink to="/">
              Home<FaHome></FaHome>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="flex items-center gap-2 ">
            <NavLink to="/dashboard/profile">
              Profile <CgProfile />
            </NavLink>
          </li>
          <li className="flex items-center gap-2 ">
            <NavLink onClick={handelSignout} to="/">
              logout <TbLogout />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-[#FFFDFA]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashborad;
