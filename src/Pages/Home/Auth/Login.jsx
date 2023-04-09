import React from "react";
import { Button } from "primereact/button";

function Login() {
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
        label="Giriş Yap"
        className="w-full p-3"
        style={{ borderRadius: "8px" }}
      />
      <a className="cursor-pointer font-medium block text-right mt-2">
        Şifremi Unuttum
      </a>
    </div>
  );
}

export default Login;
