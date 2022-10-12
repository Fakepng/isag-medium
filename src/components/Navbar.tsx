import React from "react";
import { FaHome, FaInbox } from "react-icons/fa";
import { BsThreeDots, BsFillPeopleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center p-4">
      {/* <img src="/static/images/logo-isag.png" className="w-6 mx-auto" alt="" /> */}
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
  );
}
