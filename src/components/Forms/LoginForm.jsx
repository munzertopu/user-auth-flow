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
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  //   const getUser = () => {
  //     //axios.get()
  //   };

  //   const handleSubmitForm = (e) => {
  //     console.log(e);
  //   };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("FORM", user);
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

        <Button variant="contained" size="large" fullWidth>
          Login
        </Button>
        <Typography textAlign="center" mt={1}>
          Don't have an account? <Link to="/registration">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
