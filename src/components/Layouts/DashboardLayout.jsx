import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar dashboard />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="false" sx={{ pt: 5 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
export default DashboardLayout;
