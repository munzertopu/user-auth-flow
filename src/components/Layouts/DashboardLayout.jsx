import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar dashboard />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
};
export default DashboardLayout;
