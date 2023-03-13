import Image from "next/image";
import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Logo from "../../public/assets/images/logo-black.png";
function TopBar() {
  return (
    <div className="flex justify-center items-center bg-white h-20">
      <div className="max-w-[1200px] flex justify-between items-center w-full">
        <div className=" flex justify-start items-center">
          <Image src={Logo} alt="" width={200} height={120} />
        </div>
        <div className="flex justify-center items-center w-full relative">
          <input
            className="border-2 rounded-lg p-5 text-black h-14 w-3/5"
            placeholder="Ürün, kategori veya marka ara"
          />
          <CiSearch className="absolute right-44 text-2xl" />
        </div>

        <div className="flex justify-end items-center w-[25%]">
          <div className="flex items-center  cursor-pointer">
            <CiHeart className="text-3xl font-bold text-gray-700 " />
            <p className="text-md font-medium text-gray-500 ">Favorilerim</p>
          </div>
          <div className="flex items-center  cursor-pointer"> 
            <BsPerson className="text-2xl font-bold text-gray-700 ml-5" />
            <p className="text-md font-medium text-gray-500 ">Hesabım</p>
          </div>
          <div className="flex items-center  cursor-pointer">
            <MdOutlineLocalGroceryStore className="text-gray-700 text-2xl ml-5" />
            <p className="text-md font-medium text-gray-500 ">Sepet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
