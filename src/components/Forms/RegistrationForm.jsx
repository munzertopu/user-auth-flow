import { useState } from "react";
import { TextField, Grid, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData };
      const keys = name.split(".");
      let nestedData = updatedData;
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          nestedData[key] = value; // Update the final nested property value
        } else {
          nestedData = nestedData[key]; // Traverse deeper into the nested object
        }
      });

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/users",
        formData
      );

      setLoading(false);
      setError(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      setLoading(false);
      setError(true);
      setSuccess(false);
      console.log("Error==>", error.response);
    }
  };
  return (
    <Box sx={{ maxWidth: 800, mx: "auto" }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" textAlign="center">
          Create an account
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="name.firstname"
              value={formData.name.firstname}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="name.lastname"
              value={formData.name.lastname}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="address.city"
              value={formData.address.city}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Street"
              name="address.street"
              value={formData.address.street}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Street Number"
              name="address.number"
              value={formData.address.number}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Zipcode"
              name="address.zipcode"
              value={formData.address.zipcode}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Latitude"
              name="address.geolocation.lat"
              value={formData.address.geolocation.lat}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Longitude"
              name="address.geolocation.long"
              value={formData.address.geolocation.long}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{ margin: "10px 0px" }}
        >
          {loading ? "Signing Up" : "Sign up"}
        </Button>
        <Typography textAlign="center" mt={1}>
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Box>
      <Box textAlign="center">
        {success && (
          <Typography variant="h5" color="green">
            Thanks for signing up.Redirecting to login page.......
          </Typography>
        )}
        {error && (
          <Typography variant="h5" color="red">
            Something went wrong
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RegistrationForm;
