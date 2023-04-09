import React, { useState, useRef, useEffect } from "react";

export default function Category() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [categoryWidthSize, setCategoryWidth] = useState(false);
  const container = useRef();

  useEffect(() => {
    if (container.current.clientWidth > 1200) {
      setCategoryWidth(true);
    } else {
      setCategoryWidth(false);
    }
  }, [container]);
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
          <li
            className="flex flex-column lg:flex-row"
            onMouseEnter={() => setActiveIndex(0)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <a
              className="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
            >
              <span>Women</span>
            </a>
            <div
              className={
                0 === activeIndex
                  ? "surface-overlay shadow-none lg:shadow-2 lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
                  : "surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
              }
            >
              <div className="flex flex-column lg:flex-row lg:justify-content-between">
                <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                  Clothing
                </a>
                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                  <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                    Clothing
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Dresses
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Jeans</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Pants</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Skirts</li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Sweaters
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Blouses
                  </li>
                </ul>
                <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                  Shoes
                </a>
                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                  <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                    Shoes
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Athletic
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Sneakers
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Outdoor
                  </li>
                </ul>
                <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                  Accessories
                </a>
                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                  <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                    Accessories
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Handbags
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Earmuffs
                  </li>
                </ul>
                <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                  Jewelry
                </a>
                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                  <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                    Jewelry
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Anklets
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Bracelets
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Earrings
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Necklaces
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Rings</li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Wedding
                  </li>
                </ul>
                <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                  Brands
                </a>
                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                  <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                    Brands
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Hyper</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Peak</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Alfred</li>
                  <li className="mb-3 cursor-pointer hover:text-900">
                    Bastion
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-900">Charot</li>
                  <li className="mb-3 cursor-pointer hover:text-900">Hodly</li>
                </ul>
                <ul className="list-none p-0 m-0 text-700">
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
                </ul>
              </div>
            </div>
          </li>

          {[1, 1, 1, 1].map((item, i) => (
            <li
              key={i}
              className="flex flex-column lg:flex-row"
              onMouseEnter={() => setActiveIndex(0)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <a
                className="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
              >
                <span>Women</span>
              </a>
              <div
                className={
                  0 === activeIndex
                    ? "surface-overlay shadow-none lg:shadow-2 lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
                    : "surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
                }
              >
                <div className="flex flex-column lg:flex-row lg:justify-content-between">
                  <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                    Clothing
                  </a>
                  <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                    <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                      Clothing
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Dresses
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Jeans
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Pants
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Skirts
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Sweaters
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Blouses
                    </li>
                  </ul>
                  <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                    Shoes
                  </a>
                  <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                    <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                      Shoes
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Athletic
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Boots
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Sneakers
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Flats
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Outdoor
                    </li>
                  </ul>
                  <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                    Accessories
                  </a>
                  <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                    <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                      Accessories
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Handbags
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Gloves
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Belts
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Earmuffs
                    </li>
                  </ul>
                  <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                    Jewelry
                  </a>
                  <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                    <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                      Jewelry
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Anklets
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Bracelets
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Earrings
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Necklaces
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Rings
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Wedding
                    </li>
                  </ul>
                  <a className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">
                    Brands
                  </a>
                  <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                    <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                      Brands
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Hyper
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">Peak</li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Alfred
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Bastion
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Charot
                    </li>
                    <li className="mb-3 cursor-pointer hover:text-900">
                      Hodly
                    </li>
                  </ul>
                  <ul className="list-none p-0 m-0 text-700">
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
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <li
            className="flex flex-column lg:flex-row"
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <a
              className="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
            >
              <span>Men</span>
            </a>
            <div
              className={
                1 === activeIndex
                  ? "surface-overlay shadow-none lg:shadow-2 lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
                  : "surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
              }
            >
              Men
              <div className="border-2 border-dashed surface-border border-round h-full" />
            </div>
          </li>
          <li
            className="flex flex-column lg:flex-row"
            onMouseEnter={() => setActiveIndex(2)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <a
              className="inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent 
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
            >
              <span>Kids</span>
            </a>
            <div
              className={
                2 === activeIndex
                  ? "surface-overlay shadow-none lg:shadow-2 lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
                  : "surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem"
              }
            >
              Kids
              <div className="border-2 border-dashed surface-border border-round h-full" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
