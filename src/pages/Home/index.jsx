import { Box, Typography } from "@mui/material";
import landingImg from "../../assets/landing.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${landingImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, .7)",
          p: 2,
          borderRadius: 1.5,
        }}
      >
        <Typography component="h1" variant="h3">
          RIMES
        </Typography>
        <Typography variant="h6">
          Regional Integrated Multi-Hazard Early Warning System for Africa and
          Asia.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
