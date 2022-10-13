import React from "react";
import { FaHome, FaInbox, FaMoon, FaSun } from "react-icons/fa";
import { BsThreeDots, BsFillPeopleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex lg:flex-col lg:w-fit lg:min-h-screen p-4 lg:justify-between bg-white fixed bottom-0 w-full">
      <div className="w-7 hidden lg:block">
        <img className="w-full" src="/static/images/logo-isag.png" alt="" />
      </div>
      <div className="flex lg:block w-full justify-around">
        <div>
          <FaHome className="nav-icon" />
        </div>
        <div>
          <FaInbox className="nav-icon" />
        </div>
        <div>
          <BsFillPeopleFill className="nav-icon" />
        </div>
        <div>
          <BsThreeDots className="nav-icon" />
        </div>
      </div>
      <div className="hidden lg:block">
        <FaSun className="nav-icon !my-0" />
      </div>
    </div>
  );
}
