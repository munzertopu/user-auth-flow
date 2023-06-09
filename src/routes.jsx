import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const Routers = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Login setAuth={setAuthenticated} />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};

export default Routers;
