import React from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

export const dash = (data) => {
  return data;
};
const Dashboard = () => {
  const card = [
    {
      progress: "bg-blue-400",
      title: "Total Registered Sellers",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[#ff5370]" />,
      bg : "#ff5370"
    },
    {
      progress: "bg-green-400",
      title: "Total Buyers",
      number: "100",
      icon: (
        <MdOutlineLibraryBooks className="text-2xl text-[#4099ff]" />
      ),
      bg : "#4099ff"
    },
    {
      progress: "bg-yellow-400",
      title: "Transporter",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[#2ed8b6]" />
      ),
      bg : "#2ed8b6"
    },
    {
      progress: "bg-yellow-400",
      title: "Pending Auction",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      bg : "#ffb64d"
    },
    {
      progress: "bg-yellow-400",
      title: " In Process Auction",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      bg : "#232b4b"
    },
    {
      progress: "bg-yellow-400",
      title: "Completed Auction",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      bg : "#5b63d3"
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md" style={{backgroundColor : `${card.bg}`}}>
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900" style={{color : "#fff"}}>
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold" style={{color : "#fff"}}>
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
