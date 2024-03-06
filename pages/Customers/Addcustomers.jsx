import React, { useState } from "react";
import Topbar2 from "../../layouts/Topbar2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FFormElementsInputPlainLgRequired() {
  const navigate = useNavigate();

  return (
    <>
      <Topbar2 />
      <div className="bg-white">
        <div className="flex justify-between">
          <div className="font-bold m-5 gap-2 flex items-center text-lg">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6.91667C15.083 6.91667 16.1216 7.34688 16.8874 8.11265C17.6531 8.87843 18.0833 9.91704 18.0833 11C18.0833 12.083 17.6531 13.1216 16.8874 13.8874C16.1216 14.6531 15.083 15.0833 14 15.0833C12.917 15.0833 11.8784 14.6531 11.1126 13.8874C10.3469 13.1216 9.91667 12.083 9.91667 11C9.91667 9.91704 10.3469 8.87843 11.1126 8.11265C11.8784 7.34688 12.917 6.91667 14 6.91667ZM5.83333 9.83334C6.48667 9.83334 7.09333 10.0083 7.61833 10.3233C7.44333 11.9917 7.93333 13.6483 8.93667 14.9433C8.35333 16.0633 7.18667 16.8333 5.83333 16.8333C4.90508 16.8333 4.01484 16.4646 3.35846 15.8082C2.70208 15.1518 2.33333 14.2616 2.33333 13.3333C2.33333 12.4051 2.70208 11.5148 3.35846 10.8585C4.01484 10.2021 4.90508 9.83334 5.83333 9.83334ZM22.1667 9.83334C23.0949 9.83334 23.9852 10.2021 24.6415 10.8585C25.2979 11.5148 25.6667 12.4051 25.6667 13.3333C25.6667 14.2616 25.2979 15.1518 24.6415 15.8082C23.9852 16.4646 23.0949 16.8333 22.1667 16.8333C20.8133 16.8333 19.6467 16.0633 19.0633 14.9433C20.0805 13.6302 20.5527 11.9756 20.3817 10.3233C20.9067 10.0083 21.5133 9.83334 22.1667 9.83334ZM6.41667 21.7917C6.41667 19.3767 9.81167 17.4167 14 17.4167C18.1883 17.4167 21.5833 19.3767 21.5833 21.7917V23.8333H6.41667V21.7917ZM0 23.8333V22.0833C0 20.4617 2.205 19.0967 5.19167 18.7C4.50333 19.4933 4.08333 20.59 4.08333 21.7917V23.8333H0ZM28 23.8333H23.9167V21.7917C23.9167 20.59 23.4967 19.4933 22.8083 18.7C25.795 19.0967 28 20.4617 28 22.0833V23.8333Z" fill="#27272A"/>
</svg>

            Add Customer
          </div>

          {/* Close */}
          <div className="flex mr-4">
            <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../customers");
              }}
            >
              <button className="flex bg-customPurple p-1 text-white text-md items-center px-4 rounded-md focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 bg-customPurple fill-white" />
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="ml-5 font-semibold text-lg">Basic Information</div>
        <div className="ml-5 mt-5 flex flex-col gap-5">
          <div className="w-[20%]">
            <label className="block mb-2">Full Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Business name"
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">E-Mail</label>
            <input
              class="input-field"
              type="email"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">Contact no.</label>
            <input
              class="input-field"
              type="tel"
              placeholder="+91 - 7983163574"
            />
          </div>
        </div>
      
        <div className="ml-5 mt-5 flex flex-col gap-5">
          <div>
            <label className="block mb-2">Country</label>
            <select name="Country" id="" className="mr-20">
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="America">America</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">State</label>
            <input class="input-field" type="text" placeholder="State" />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">District</label>
            <input class="input-field" type="text" placeholder="District" />
          </div>
        </div>
     
        {/* Submit Button */}
        <div
          className="flex items-stretch m-5 focus:bg-gray-900"
          onClick={() => {
            navigate("../customers");
          }}
        >
          <button className="flex bg-customPurple text-white text-md items-center py-2 px-4 rounded-md focus:outline-none  ">
            Submit
            <MdOutlineSend className="ml-2 scale-125  fill-white" />
          </button>
        </div>
      </div>
    </>
  );
}
