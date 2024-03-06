// index.jsx
import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";


// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore, AiOutlineInfoCircle } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
// import { BsCartDash } from "react-icons/bs";
// import { TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdOutlineDashboard } from "react-icons/md";

import {
  MdMenu,
  MdRateReview,
  MdOutlineLocalOffer,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { FaCloudUploadAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

//
import { MdProductionQuantityLimits } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
import { TbDiscount2 } from "react-icons/tb";

import { MdOutlineCategory } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { IoMdList } from "react-icons/io";
import { TbSelect } from "react-icons/tb";

import { MdOutlinePublish } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

import { IoMdSettings } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  //addings

  // const subMenusList1 = [
  //   {
  //     name: "Shop Profile",
  //     icon: AiOutlineShop,
  //   },
  // ];

  // const subMenusList2 = [
  //   {
  //     name: "Category",
  //     icon: MdOutlineCategory,
  //     menus: [
  //       {

  //         name: "Choose Category  ",
  //         icon: <TbCategory2 />,
  //       },
  //     ]

  //   },
  // ];

  const subMenusList2 = [
    {
      name: "Category",
      icon: BiCategory,
    },
  ];

  const subMenusList3 = [
    {
      name: "Products",
      icon: MdProductionQuantityLimits,
      menus: [
        {
          name: "Bulk Upload ",
          icon: <FaCloudUploadAlt />,
        },
        // {

        //   name: "Category",
        //   icon: <BiCategory />,
        // },
        // {

        //   name: "Commission",
        //   icon: <FaMoneyCheckAlt />,
        // },
        // {

        //   name: "Reviews",
        //   icon: <MdRateReview />,
        // },
      ],
    },
  ];

  const subMenusList4 = [
    {
      name: "Offers",
      icon: MdOutlineLocalOffer,
      menus: [
        {
          name: "All Category",
          icon: <IoMdList />,
        },
        {
          name: "Choose Category",
          icon: <TbSelect />,
        },
      ],
    },
  ];
  //   const subMenusList4 = [
  // {
  //   name: "Customers",
  //   icon: TbReportAnalytics,
  // menus: [
  //   {

  //     name: "Country ",
  //     icon: <FaCloudUploadAlt />,
  //   },
  //   {

  //     name: "State",
  //     icon: <BiCategory />,
  //   },
  //   {

  //     name: "City",
  //     icon: <FaMoneyCheckAlt />,
  //   },
  //   {

  //     name: "Address Types ",
  //     icon: <MdRateReview />,
  //   },
  // ],
  // },
  // ];

  return (
    <div className="">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-customDark/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        //adding//
        className=" bg-customDark text-white z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed position-fixed h-screen overflow-y-auto "
      >
        <div className="flex items-center gap-2.5 font-medium py-3 mx-3 cursor-pointer">
          {/* <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          /> */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
              textAlign: "center",
            }}
          >
            <img
              src="/src/images/logo-light.png"
              alt="Offers"
              width="135"
              className="pl-6"
              style={{ alignSelf: "center" }}
            />
            <h6
              style={{
                color: "rgb(16 185 129 / var(--tw-text-opacity))",
                padding: "3px",
                border: "0px solid grey",
                marginLeft: "23px",
                fontWeight: "bold",
              }}
            >
              Seller Admin Panel
            </h6>
          </div>

          {/* <img src="/src/images/logo-light.png" alt="Offers" width="135" class="pl-6"></img>
          <h6>Seller</h6> */}

          {/* <span className="text-xl whitespace-pre">LOGO</span> */}
          {/* <h1 className={`items-center mx-auto ${open ? "mx-auto " : "text-sm font-bold "}`}>OFFERS</h1> */}
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-customDark scrollbar-thumb-customDark   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link text-base hover:text-gray-100">
                <MdOutlineDashboard size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/shopprofile"}
                className="link text-base hover:text-gray-100"
              >
                <AiOutlineShop size={23} className="min-w-max" />
                Shop Profile
              </NavLink>
            </li>

            {/* {(open || isTabletMid) && (
                <div>
                {subMenusList1?.map((menu,index) => (
                    <div  className="flex flex-col">
                      <SubMenu data={menu} key={index} />
                    </div>
                  ))}
                </div>
              )} */}

            {(open || isTabletMid) && (
              <div>
                {subMenusList2?.map((menu, index) => (
                  <div className="flex flex-col">
                    <SubMenu data={menu} key={index} />
                  </div>
                ))}
              </div>
            )}

            {(open || isTabletMid) && (
              <div>
                {subMenusList3?.map((menu, index) => (
                  <div className="flex flex-col">
                    <SubMenu data={menu} key={index} />
                  </div>
                ))}
              </div>
            )}

            {(open || isTabletMid) && (
              <div>
                {subMenusList4?.map((menu, index) => (
                  <div className="flex flex-col">
                    <SubMenu data={menu} key={index} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink
                to={"/savetemplate"}
                className="link text-base hover:text-gray-100"
              >
                <CgTemplate size={23} className="min-w-max" />
                Save Template
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to={"/offer/cover-photo"}
                className="link text-base hover:text-gray-100"
              >
                <TbDiscount2 size={23} className="min-w-max" />
                Offer
              </NavLink>
            </li> */}

              <NavLink
              to={"/offer"}
              className="link text-white text-base hover:text-gray-100"
            >
              <TbDiscount2 size={23} className="min-w-max" />
              Offer
            </NavLink>

            <li>
              <NavLink
                to={"/publish"}
                className="link text-base hover:text-gray-100"
              >
                <MdOutlinePublish size={23} className="min-w-max" />
                Publish
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/analytics/MetricVsTarget"}
                className="link text-base hover:text-gray-100"
              >
                <IoAnalyticsOutline size={23} className="min-w-max" />
                Analytics
              </NavLink>
            </li>

            <NavLink
              to={"/help"}
              className="link text-white text-base hover:text-gray-100"
            >
              <RiCustomerService2Line size={23} className="min-w-max" />
              Help Center
            </NavLink>

            <NavLink
              to={"/setting"}
              className="link text-white text-base hover:text-gray-100"
            >
              <IoMdSettings size={23} className="min-w-max" />
              Setting
            </NavLink>
          </ul>
          {open && (
            <div className="flex-1 z-50 m-4 max-h-48 my-auto  whitespace-pre font-medium  cursor-pointer">
              <NavLink to={"/login"}>
                <div className="flex text-black bg-customPurple rounded-md p-2 items-center gap-2 justify-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H15V6.375C15 4.875 13.4161 3.75 12 3.75H4.875C4.17904 3.75074 3.51179 4.02755 3.01967 4.51967C2.52755 5.01179 2.25074 5.67904 2.25 6.375V17.625C2.25074 18.321 2.52755 18.9882 3.01967 19.4803C3.51179 19.9725 4.17904 20.2493 4.875 20.25H12.375C13.071 20.2493 13.7382 19.9725 14.2303 19.4803C14.7225 18.9882 14.9993 18.321 15 17.625V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12ZM21.5302 11.4698L17.7802 7.71984C17.6384 7.58513 17.4495 7.51114 17.254 7.51364C17.0584 7.51614 16.8715 7.59495 16.7332 7.73325C16.5949 7.87155 16.5161 8.0584 16.5136 8.25398C16.5111 8.44955 16.5851 8.63836 16.7198 8.78016L19.1892 11.25H15V12.75H19.1892L16.7198 15.2198C16.6473 15.2888 16.5892 15.3716 16.5492 15.4633C16.5091 15.555 16.4878 15.6539 16.4865 15.754C16.4852 15.8541 16.504 15.9534 16.5417 16.0461C16.5794 16.1389 16.6353 16.2231 16.7061 16.2939C16.7769 16.3647 16.8611 16.4206 16.9539 16.4583C17.0466 16.496 17.1459 16.5148 17.246 16.5135C17.3461 16.5122 17.445 16.4909 17.5367 16.4508C17.6284 16.4108 17.7112 16.3527 17.7802 16.2802L21.5302 12.5302C21.6707 12.3895 21.7497 12.1988 21.7497 12C21.7497 11.8012 21.6707 11.6105 21.5302 11.4698Z"
                      fill="black"
                    />
                  </svg>
                  <p className="hover:text-white">Log Out</p>
                </div>
              </NavLink>
            </div>
          )}
        </div>

        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>

      {/*  menu icon */}
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
