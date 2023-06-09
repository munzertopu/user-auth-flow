import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Typography variant="h4" textAlign="center">
        Welcome
      </Typography>
    </Box>
  );
};

export default Dashboard;
