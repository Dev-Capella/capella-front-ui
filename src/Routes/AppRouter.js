import { Routes, Route } from "react-router-dom";
import { React } from "react";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/Home";
import Login from "../Pages/Home/Auth/Login";
import Register from "../Pages/Home/Auth/Register";
import AuthLayout from "../Layouts/AuthLayout";
import RegisterRequest from "../Pages/Home/Auth/RegisterRequest";
import RegisterLayout from "../Layouts/RegisterLayout";

const AppRoutes = () => (
  <div>
    <Routes>
      <Route>
        <Route path="" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
      <Route path="" element={<AuthLayout />}>
        <Route path="/register-request" element={<RegisterRequest />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="" element={<RegisterLayout />}>
        <Route path="/register/:userId/:token" element={<Register />} />
      </Route>
    </Routes>
  </div>
);

export default AppRoutes;
