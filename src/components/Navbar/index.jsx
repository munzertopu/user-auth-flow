import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ dashboard }) => {
  const navigate = useNavigate();
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RIMES
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Box
              sx={{
                listStyle: "none",
                px: 0,
                mb: 0,
                display: "flex",
                gap: 1,
                "& a": {
                  color: "inherit",
                  textDecoration: "none",
                },
                "& .active": {
                  opacity: 0.65,
                },
              }}
            >
              {!dashboard ? (
                <>
                  {" "}
                  <Box component="li">
                    <NavLink to="/">Home</NavLink>
                  </Box>
                  <Box component="li">
                    <NavLink to="/about">About</NavLink>
                  </Box>
                  <Box component="li">
                    <NavLink to="/login">Login</NavLink>
                  </Box>
                </>
              ) : (
                <Box component="li">
                  <Button
                    color="inherit"
                    onClick={() => {
                      localStorage.removeItem("fake_access_token");
                      navigate("/");
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
