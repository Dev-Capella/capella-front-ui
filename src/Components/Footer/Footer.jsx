import React from "react";

export default function Footer() {
  return (
    <div className="surface-section">
      <div className="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none">
        <div className="grid grid-nogutter flex-wrap -mr-3 -ml-3 text-center md:text-left">
          <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
            <span className="text-900 text-xl block">Company</span>
            <ul className="list-none p-0">
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  About Peak
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Factories
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Environmental Initiatives
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
            <span className="text-900 text-xl block">Account</span>
            <ul className="list-none p-0">
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Manage Account
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Saved Items
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  My Cart
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Wishlist
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Orders &amp; Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border">
            <span className="text-900 text-xl block">Legal</span>
            <ul className="list-none p-0">
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Investor Relations
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Data Privacy
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">
                  Legal Information
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 mb-4 lg:mb-0">
            <span className="text-900 text-xl block">Subscribe</span>
            <span className="text-500 block mt-4 line-height-3">
              Join our community to receieve the latest updates and special
              promotions.
            </span>
            <div
              className="p-inputgroup mt-3 mx-auto lg:mx-0"
              style={{ maxWidth: "30rem" }}
            >
              <button
                type="button"
                className="text-500 surface-100 surface-border"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-y-1 text-500 border-x-none surface-border"
              />
              <button
                type="button"
                className="text-500 surface-100 surface-border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
        <div className="col-fixed flex justify-content-center md:justify-content-start flex-wrap flex-order-1 lg:flex-order-0">
          <img
            src="/assets/images/blocks/ecommerce/storefront/storefront-1-21.svg"
            className="w-3rem mb-3 md:mb-0 mr-3"
            alt="Amex"
          />
          <img
            src="/assets/images/blocks/ecommerce/storefront/storefront-1-22.svg"
            className="w-3rem mb-3 md:mb-0 mr-3"
            alt="Apple Pay"
          />
          <img
            src="/assets/images/blocks/ecommerce/storefront/storefront-1-23.svg"
            className="w-3rem mb-3 md:mb-0 mr-3"
            alt="Mastercard"
          />
          <img
            src="/assets/images/blocks/ecommerce/storefront/storefront-1-25.svg"
            className="w-3rem mb-3 md:mb-0 mr-3"
            alt="Visa"
          />
          <img
            src="/assets/images/blocks/ecommerce/storefront/storefront-1-24.svg"
            className="w-3rem  mb-3 md:mb-0"
            alt="PayPal"
          />
        </div>
        <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
          <a className="cursor-pointer mr-3">
            <i className="pi pi-facebook surface-900 p-1 text-sm border-circle text-0" />
          </a>
          <a className="cursor-pointer mr-3">
            <i className="pi pi-twitter surface-900 p-1 text-sm border-circle text-0" />
          </a>
          <a className="cursor-pointer mr-3">
            <i className="pi pi-youtube surface-900 p-1 text-sm border-circle text-0" />
          </a>
          <a className="cursor-pointer">
            <i className="pi pi-google surface-900 p-1 text-sm border-circle text-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
