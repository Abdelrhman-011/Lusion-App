import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "react-bootstrap";
import { ClimbingBoxLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [errfirstname, seterrfirstname] = useState(false);
  const [lastName, setlastName] = useState("");
  const [errLastName, seterrLastName] = useState(false);
  const [email, setemail] = useState("");
  const [errEmail, seterrEmail] = useState(false);
  const [password, setpassword] = useState("");
  const [errpassword, seterrpassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errconfirmPassword, seterrconfirmPassword] = useState(false);
  const [select, setselect] = useState("");
  const [errselect, seterrSelect] = useState(false);
  const [loading, setLoading] = useState(false);
  const navgitly = useNavigate();

  const handelform = (e) => {
    e.preventDefault();

    if (firstname === "" || firstname === " ") {
      seterrfirstname(true);
    } else if (lastName === "" || lastName === " ") {
      seterrfirstname(false);
      seterrLastName(true);
    } else if (
      email === "" ||
      email === " " ||
      !email.split("").includes("@") ||
      !email.split("@").includes("gmail.com")
    ) {
      seterrfirstname(false);
      seterrLastName(false);
      seterrEmail(true);
    } else if (password === "" || password === " " || password.length < 9) {
      seterrfirstname(false);
      seterrLastName(false);
      seterrEmail(false);
      seterrpassword(true);
    } else if (password !== confirmPassword) {
      seterrfirstname(false);
      seterrLastName(false);
      seterrEmail(false);
      seterrpassword(false);
      seterrconfirmPassword(true);
    } else if (select === "") {
      seterrfirstname(false);
      seterrLastName(false);
      seterrEmail(false);
      seterrpassword(false);
      seterrconfirmPassword(false);
      seterrSelect(true);
    } else {
      seterrfirstname(false);
      seterrLastName(false);
      seterrEmail(false);
      seterrpassword(false);
      seterrconfirmPassword(false);
      seterrSelect(false);
      setLoading(true);
      const data = {
        firstname,
        lastName,
        email,
        password,
        confirmPassword,
        select,
      };
      localStorage.user = JSON.stringify(data);
      setTimeout(() => {
        navgitly("/login");
      }, 5000);
    }
  };

  const currencies = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "female",
      label: "female",
    },
  ];
  return (
    <div>
      {loading ? (
        <div className="w-100 d-flex justify-content-center align-items-center mt-5 vh-100">
          <ClimbingBoxLoader color="#36d7b7" size={25} />
        </div>
      ) : (
        <div
          className="w-100 d-flex justify-content-center align-items-center mt-5"
          style={{ height: "100vh" }}
        >
          <div className="w-75 container ">
            <form
              onSubmit={handelform}
              className="row d-flex justify-content-center"
            >
              <TextField
                className="col-lg-5 col-md-5 col-12 me-5 mb-5"
                id="outlined-basic"
                error={errfirstname}
                label={errfirstname ? "invailed First Name" : "First Name"}
                variant="outlined"
                onChange={(e) => setfirstname(e.target.value)}
              />
              <TextField
                className="col-lg-5 col-md-5 col-12 me-5 mb-5"
                id="outlined-basic"
                label={errLastName ? "invailed Last Name" : "Last Name"}
                error={errLastName}
                variant="outlined"
                onChange={(e) => setlastName(e.target.value)}
              />
              <TextField
                className="col-lg-5 col-md-5 col-12 me-5 mb-5"
                id="outlined-basic"
                label={errEmail ? "invailed Email" : "Email"}
                error={errEmail}
                variant="outlined"
                onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                className="col-lg-5 col-md-5 col-12 me-5 mb-5"
                id="outlined-basic"
                label={errpassword ? "invailed password" : "password"}
                error={errpassword}
                type="password"
                variant="outlined"
                onChange={(e) => setpassword(e.target.value)}
              />
              <TextField
                className="col-lg-5 col-md-5 col-12 me-5 mb-5"
                id="outlined-basic"
                label={
                  errconfirmPassword
                    ? "invailed Confirm Password"
                    : "Confirm Password"
                }
                error={errconfirmPassword}
                type="password"
                variant="outlined"
                onChange={(e) => setconfirmPassword(e.target.value)}
              />

              <TextField
                className="col-lg-5 col-md-5 col-12 me-5 mb-5"
                id="outlined-select-currency"
                select
                error={errselect}
                label="Gender"
                defaultValue=""
                helperText="Please select your currency"
                onChange={(e) => setselect(e.target.value)}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <div className="d-flex justify-content-center">
                <Button type="submit" className="me-2 mb-5" variant="primary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
