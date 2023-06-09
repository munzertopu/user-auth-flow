import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/Forms/RegistrationForm";

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
          <Link to="/"></Link>
        </Typography>
        <RegistrationForm />
      </Container>
    </Box>
  );
};

export default Registration;
