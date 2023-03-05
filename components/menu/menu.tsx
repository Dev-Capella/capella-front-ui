"use client";
import { useState } from "react";

function Menu() {
  const [activeItem, setActiveItem] = useState("");
  function handleMouseOver(event: any) {
    setActiveItem(event.target.innerText);
    console.log(event.target.innerText);
  }
  return (
    <div className="flex justify-center items-center h-16 border-t-4 border-violet-600 bg-[#F5F5F5] ">
      <div className="max-w-[1200px] flex justify-between items-center w-full relative">
        <ul className="flex justify-center items-center w-full text-sm font-medium text-slate-600 ">
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10"
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Elektronik
            </p>

            <div
              className={
                activeItem === "Elektronik"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10"
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">Moda</p>
            <div
              className={
                activeItem === "Moda"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10 "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Ev, Yaşam, Kırtasiye, Ofis
            </p>
            <div
              className={
                activeItem === "Ev, Yaşam, Kırtasiye, Ofis"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10 "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Oto, Bahçe, Yapı Market
            </p>
            <div
              className={
                activeItem === "Oto, Bahçe, Yapı Market"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10  "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Anne, Bebek, Oyuncak
            </p>
            <div
              className={
                activeItem === "Anne, Bebek, Oyuncak"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10 "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Spor, Outdoor
            </p>
            <div
              className={
                activeItem === "Spor, Outdoor"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10 "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Kozmetik, Kişisel Bakım
            </p>
            <div
              className={
                activeItem === "Kozmetik, Kişisel Bakım"
                  ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                  : "hidden"
              }
              onMouseLeave={() => setActiveItem("")}
            >
              {activeItem}
            </div>
          </li>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10 "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Süpermarket, Pet Shop
            </p>
          </li>
          <div
            className={
              activeItem === "Süpermarket, Pet Shop"
                ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                : "hidden"
            }
            onMouseLeave={() => setActiveItem("")}
          >
            {activeItem}
          </div>
          <li
            className="text-center hover:text-purple-900 cursor-pointer  hover:border-b-2 hover:border-indigo-500 h-10 "
            onMouseOver={handleMouseOver}
          >
            <p className="px-2 h-full flex justify-center items-center">
              Kitap, Müzik, Film, Hobi
            </p>
          </li>
          <div
            className={
              activeItem === "Kitap, Müzik, Film, Hobi"
                ? "bg-white top-[60px] absolute h-[500px] w-full left-0"
                : "hidden"
            }
            onMouseLeave={() => setActiveItem("")}
          >
            {activeItem}
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
