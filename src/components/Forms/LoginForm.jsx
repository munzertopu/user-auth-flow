import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { generateAccessToken } from "../../utills/helper";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const getUsers = async (user) => {
    const { username, password } = user;
    try {
      const { data } = await axios.get("https://fakestoreapi.com/users");
      console.log("Data", data);
      const allUsers = [...data];
      const authorized = allUsers.filter(
        (item) => item.username === username && item.password === password
      );
      if (authorized.length > 0) {
        // setting the authentication by geneating fake access token and saving the token in browers's local storage. The authorization can also be done by lifting state up and get the current state in the component where routes are defined. If you want to avoid lifting state up , React Global State Management Tool like Redux can be used.
        const fakeAccessToken = generateAccessToken();
        localStorage.setItem(
          "fake_access_token",
          JSON.stringify(fakeAccessToken)
        );
      } else {
        setError("Username or password did not match");
      }
    } catch (error) {
      console.log("Error===>", error.response);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError("");
    getUsers(user);
  };
  return (
    <Box sx={{ maxWidth: 320, mx: "auto" }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <TextField
          fullWidth
          required
          type="text"
          id="username"
          label="Username"
          name="username"
          onChange={handleInput}
          sx={{ mb: 2 }}
        />

        <FormControl variant="outlined" required fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            onChange={handleInput}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button variant="contained" size="large" fullWidth type="submit">
          Login
        </Button>
        <Box textAlign="center">
          {error !== "" && (
            <Typography variant="h5" color="red">
              {error}
            </Typography>
          )}
        </Box>
        <Typography textAlign="center" mt={1}>
          Don't have an account? <Link to="/registration">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
