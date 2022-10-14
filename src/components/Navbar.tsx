import React from "react";
import { FaHome, FaInbox, FaMoon, FaSun } from "react-icons/fa";
import { BsThreeDots, BsFillPeopleFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

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
        {currentTheme === "dark" ? (
          <button type="button" onClick={() => setTheme("light")}>
            <FaSun className="nav-icon !my-0" />
          </button>
        ) : (
          <button type="button" onClick={() => setTheme("dark")}>
            <FaMoon className="nav-icon !my-0" />
          </button>
        )}
      </div>
    </div>
  );
}
