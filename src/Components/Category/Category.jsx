import React, { useState, useRef, useEffect } from "react";
import categoryService from "../../Manager/Service/categoryService";
import ResponseStatus from "../../Manager/ResponseStatus";
export default function Category() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [categoryWidthSize, setCategoryWidth] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const container = useRef();

  useEffect(() => {
    if (container.current.clientWidth > 1200) {
      setCategoryWidth(true);
    } else {
      setCategoryWidth(false);
    }
  }, [container]);

  useEffect(() => {
    categoryService.getCategories().then((result) => {
      if (result.status === ResponseStatus.SUCCESS) {
        setCategoryList(result.data);
      }
    });
  }, []);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1; // Hızı ayarlamak için çarpanı artırabilirsiniz
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="surface-overlay w-full m-auto lg:w-8  flex align-items-stretch relative justify-content-center"
      style={{ minHeight: "80px" }}
    >
      <a className="cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5">
        <i className="pi pi-bars text-4xl" />
      </a>
      <div
        ref={container}
        id="nav-1"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={
          categoryWidthSize
            ? "surface-overlay hidden overflow-hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0"
            : "surface-overlay hidden  lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0"
        }
      >
        <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
          {categoryList.map((item, indexParent) => (
            <li
              key={indexParent}
              className="flex flex-column lg:flex-row"
              onMouseEnter={() => setActiveIndex(indexParent)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <a
                className="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent relative 
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
              >
                <span>{item.label}</span>
              </a>
              <div
                className={
                  indexParent === activeIndex && item.children.length > 0
                    ? "surface-overlay shadow-none lg:shadow-2 lg:absolute w-full left-0 top-100 px-6 py-5  z-2"
                    : "surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-5 "
                }

              >
                <div className="flex flex-column lg:flex-row justify-content-center">
                  {item.children.map((childItem, indexChild) => (
                    <span key={indexChild} className="mr-6">
                      <a className="font-bold mb-5 text-xl text-900" >
                        {childItem.label}
                      </a>
                      <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 lg:block">
                        {childItem.children.map((childItemchild, indexChildChild) => (
                          <li className="font-medium text-700 text-md cursor-pointer mb-1 select-none" key={indexChildChild}>
                            {childItemchild.label}
                          </li>
                        ))}
                      </ul>
                    </span>
                  ))}
                  {/* <ul className="list-none p-0 m-0 text-700">
                    <li className="mt-5 sm:mt-0 mb-5 flex flex-column align-items-center">
                      <img
                        src="/assets/images/blocks/ecommerce/storenavigation/storenavigation-1-1.png"
                        alt="Image"
                        style={{ borderRadius: "12px" }}
                        className="w-full lg:w-auto"
                      />
                      <span className="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">
                        New Products
                      </span>
                    </li>
                    <li className="mb-5 flex flex-column align-items-center">
                      <img
                        src="/assets/images/blocks/ecommerce/storenavigation/storenavigation-1-2.png"
                        alt="Image"
                        style={{ borderRadius: "12px" }}
                        className="w-full lg:w-auto"
                      />
                      <span className="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">
                        Discounts
                      </span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
