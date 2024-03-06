import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { links } from "./Notificationdata";

const Topbar2 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-customDark p-4">
        <div className="max-w-[3640px]  flex flex-row items-center justify-between  ">
          <div className=" flex flex-row gap-[100px] justify-between items-center  ">
            <div class="flex items-stretch   "></div>
          </div>

          <div className="flex gap-1 items-center">
            <div className="text-white cursor-pointer">
              <MdCircleNotifications onClick={() => setShow(!show)} size={25} />{" "}
            </div>
            {/* notification section starts here */}
            <div
              className={`
      bg-white rounded-md fixed shadow-lg w-[25%] right-[40px]    z-10    
        duration-700 ${show ? "top-[65px]" : "top-[-100%]"}
        `}
            >
              <div className="flex font-semibold justify-between mb-3 px-2">
                <span >Notifications</span>
                <span className="text-customPurple cursor-pointer">Mark all as Read</span>
              </div>
              <div className="scrollbar-thin text-sm scrollbar-track-white scrollbar-thumb-white max-h-[200px] ">
                {links.map((link) => (
                  <div className="flex justify-between items-center px-3  ">
                    <div className="flex gap-2 items-center">
                      <img
                        src={link.image}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h2>{link.heading}</h2>
                        <p>{link.content}</p>
                      </div>
                    </div>
                    <div className="">
                      <h3>{link.time}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`text-white cursor-pointer`}>
              <NavLink to="/myaccount">
                <FaUserCircle size={22} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar2;
