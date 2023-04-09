import React from "react";
import Category from "../../Category/Category";

function Topbar() {
  return (
    <div>
      <div className="bg-gray-900 px-3 sm:px-6 py-3 flex align-items-stretch justify-content-center sm:justify-content-end border-bottom-1 surface-border text-sm">
        <a
          className="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200"
          href="/login"
        >
          <i className="pi pi-sign-in mr-2 sm:mr-3 text-sm" />
          <span>Sign In</span>
        </a>
        <div className="text-white mx-1 sm:mx-2">|</div>
        <a className="text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
          <i className="pi pi-user mr-2 sm:mr-3 text-sm" />
          <span>Create Account</span>
        </a>
      </div>
      <div className="hidden lg:flex">
        <Category />
      </div>
    </div>
  );
}

export default Topbar;
