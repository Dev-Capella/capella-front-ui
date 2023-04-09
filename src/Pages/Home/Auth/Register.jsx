import React from "react";
import { Button } from "primereact/button";

function Register() {
  return (
    <div>
      <input
        type="text"
        className="appearance-none p-3 w-full outline-none text-base block mb-4 border-1"
        defaultValue="E-posta adresi"
        style={{
          borderRadius: "8px",
          backgroundColor: "rgb(245, 245, 245)",
          border: "2px solid rgb(238, 238, 238)",
        }}
      />
      <input
        type="password"
        className="appearance-none p-3 w-full outline-none text-base mb-4 border-1"
        defaultValue="Şifre"
        style={{
          borderRadius: "8px",
          backgroundColor: "rgb(245, 245, 245)",
          border: "2px solid rgb(238, 238, 238)",
        }}
      />
      <Button
        label="Kayıt Ol"
        className="w-full p-3"
        style={{ borderRadius: "8px" }}
      />
    </div>
  );
}

export default Register;
