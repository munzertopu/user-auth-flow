import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
};
export default HomeLayout;
