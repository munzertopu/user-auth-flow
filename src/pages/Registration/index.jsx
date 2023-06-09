import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import logo from "../../assets/rimes_logo_white.png";

const Registration = () => {
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
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" width={70} />
          </Link>
        </Typography>
        <RegistrationForm />
      </Container>
    </Box>
  );
};

export default Registration;
