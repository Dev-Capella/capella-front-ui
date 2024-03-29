import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { SelectButton } from "primereact/selectbutton";
import "./css/AuthLayout.css";
function AuthLayout() {
  const options = [
    { path: "/login", name: "Giriş Yap" },
    { path: "/register-request", name: "Kayıt Ol" },
  ];
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHandler = (e) => {
    navigate(e);
  };
  useEffect(() => {
    if (
      location.pathname === "/register-request" ||
      location.pathname === "/login"
    ) {
      setValue(location.pathname);
    }
  }, [location]);
  return (
    <>
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
            <div className="flex justify-content-center mb-5">
              <SelectButton
                value={value}
                optionValue="path"
                onChange={(e) => navigateHandler(e.value)}
                options={options}
                optionLabel="name"
              />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
