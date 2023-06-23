import React from "react";
import "./UserLogin.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { API } from "../global";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formValidationSchema = yup.object({
  userName: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const UsersLogin = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState("success");
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: { userName: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log(values);
        const data = await fetch(`${API}/users/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (data.status === 400) {
          // console.log("Error")
          setFormState("error");
          alert("Invalid Credentials");
        } else {
          setFormState("success");
          const result = await data.json();
          // console.log(result);
          sessionStorage.setItem("token", result.token);
          navigate("/studentDatas");
          alert("Login Successful");
        }
      },
    });
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Login Form</h1>
      <div className="login-form-container">
        <TextField
          variant="outlined"
          label="Email"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userName && errors.userName}
          helperText={
            touched.userName && errors.userName ? errors.userName : null
          }
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userName && errors.userName}
          helperText={
            touched.userName && errors.userName ? errors.userName : null
          }
        />
        <Button color={formState} variant="contained" type="submit">
          {formState === "success" ? "Submit" : "Retry"}
        </Button>
        <Button variant="outlined" onClick={() => navigate("/users/signup")}>
          New User? Register
        </Button>
      </div>
    </form>
  );
};

export default UsersLogin;
