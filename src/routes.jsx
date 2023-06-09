import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./auth/PrivateRoute";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import HomeLayout from "./components/Layouts/HomeLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
