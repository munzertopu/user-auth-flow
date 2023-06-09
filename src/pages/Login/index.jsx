import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";

const Login = ({ setAuth }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            "& a": {
              color: "#1976d2",
            },
          }}
        >
          <Link to="/"></Link>
        </Typography>
        <LoginForm setAuth={setAuth} />
      </Container>
    </Box>
  );
};
export default Login;
