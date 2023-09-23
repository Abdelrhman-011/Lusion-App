import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errEmail, seterrEmail] = useState(false);
  const [errPassword, seterrPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navgitly = useNavigate();
  const Swal = require("sweetalert2");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handelform = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      email === " " ||
      !email.split("").includes("@") ||
      !email.split("@").includes("gmail.com")
    ) {
      seterrEmail(true);
    } else if (password === "" || password === " " || password.length < 9) {
      seterrEmail(false);
      seterrPassword(true);
    } else if (localStorage.user) {
      if (
        JSON.parse(localStorage.user).email === email &&
        JSON.parse(localStorage.user).password === password
      ) {
        seterrEmail(false);
        seterrPassword(false);
        navgitly("/");
        localStorage.Login = true;
      } else {
        seterrEmail(false);
        seterrPassword(false);
        Swal.fire("This email does not exist, you must create an email");
      }
    } else {
      seterrEmail(false);
      seterrPassword(false);
      Swal.fire("This email does not exist, you must create an email");
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="w-50">
        <Box
          onSubmit={handelform}
          className=" d-flex flex-column align-items-center"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label={errEmail ? "invailed email" : "Email"}
            error={errEmail}
            variant="outlined"
            onChange={(e) => setemail(e.target.value)}
          />
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            error={errPassword}
            onChange={(e) => setpassword(e.target.value)}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              {errPassword ? <p>invailed password</p> : <p>password</p>}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="d-flex justify-content-between">
            <Button type="submit" className="me-2" variant="primary">
              Sign in
            </Button>
            <Button variant="primary" as={Link} to="/signup">
              Sign up
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
