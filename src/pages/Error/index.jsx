import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box textAlign="center">
        <Typography component="h1" variant="h4" mb={1}>
          Oops! We can't find the page you are looking for.
        </Typography>
        <Link to="/">
          <Button variant="contained">Back to home</Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Error;
