import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router";

function RegisterRequestLayout() {
  return (
    <div className="w-full m-auto lg:w-8" style={{ minHeight: "60rem" }}>
      <div className="flex justify-content-center text-4xl font-medium mt-6">
        capella
      </div>
      <div className="px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center flex-column">
        <div
          className="p-6 text-center lg:w-30rem"
          style={{
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,.1)",
            border: "1px solid #e5e5e5",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RegisterRequestLayout;
