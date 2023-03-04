import Image from "next/image";
import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Logo from "../../public/assets/images/logo-black.png";
function TopBar() {
  return (
    <div className="flex  items-center bg-white h-16">
      <div className="flex justify-between  items-center w-full px-16">
        <div className="flex justify-start w-[33%]">
          <div className="pr-2 text-xl text-gray-500 font-medium cursor-pointer">
            Women
          </div>
          <div className="pr-2 text-xl text-gray-500 font-medium cursor-pointer">
            Men
          </div>
          <div className="pr-2 text-xl text-gray-500 font-medium cursor-pointer">
            Kıds
          </div>
        </div>
        <div className="w-[33%] flex justify-center items-center">
          <Image src={Logo} alt="" width={125} height={125} />
        </div>
        <div className="w-[33%] flex justify-end items-center">
          <CiSearch className="text-2xl font-bold text-gray-500 ml-5" />
          <CiHeart className="text-2xl font-bold text-gray-500 ml-5" />
          <BsPerson className="text-2xl font-bold text-gray-500 ml-5" />
          <MdOutlineLocalGroceryStore className="text-gray-500 text-2xl ml-5" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
