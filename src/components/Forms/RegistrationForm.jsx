import { useState } from "react";
import { TextField, Grid, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the nested properties of the form data
    // if (name.includes(".")) {
    //   const [parentKey, childKey] = name.split(".");
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [parentKey]: {
    //       ...prevData[parentKey],
    //       [childKey]: value,
    //     },
    //   }));
    // } else {
    //   // Update the top-level properties of the form data
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // }
    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData };
      const keys = name.split(".");
      let nestedData = updatedData;

      console.log("key", keys);

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          console.log("key", 111);

          nestedData[key] = value; // Update the final nested property value
        } else {
          console.log("signle", nestedData);
          console.log("KSDFDFSDFS", key, nestedData[key]);
          nestedData = nestedData[key]; // Traverse deeper into the nested object
        }
      });

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired action with the form data
    console.log(formData);
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
          Sign up
        </Button>
        <Typography textAlign="center" mt={1}>
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Box>
      <Box textAlign="center">
        {loading ? <Typography>Loading...</Typography> : null}
        {success && (
          <Typography variant="h5" color="green">
            Thanks for signing up.
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
