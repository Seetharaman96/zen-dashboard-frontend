// import React from 'react'
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useFormik } from "formik";
// import { API } from "../global";
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";

// const formValidationSchema = yup.object({
//     userName: yup.string().required().email(),
//     password: yup.string().required().min(8),
//   });

// const Signup = () => {
//     const navigate = useNavigate();
//     const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
//       useFormik({
//         initialValues: {
//           userName: "",
//           password: "",
//         },
//         validationSchema: formValidationSchema,
//         onSubmit: async (newUser) => {
//           // console.log("Form values", newUser);
//           // addUser(newUser);
//           const data = await fetch(`${API}/users/signUp`, {
//             method: "POST",
//             headers: {
//               "Content-type": "application/json",
//             },
//             body: JSON.stringify(newUser),
//           });
//           if (data.status === 400) {
//             // console.log(Error);
//             alert("UserName already exist(redirecting to login page)");
//             navigate("/admin/login");
//           } else {
//             alert("User added successfully");
//             navigate("/users/login");
//           }
//         },
//       });
//   return (
//     <form onSubmit={handleSubmit} className="register-form">
//     <h3>Signup Form</h3>
//     <TextField
//       label="User Name"
//       variant="outlined"
//       name="userName"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       value={values.userName}
//       error={touched.userName && errors.userName}
//       helperText={
//         touched.userName && errors.userName ? errors.userName : null
//       }
//     />
//     <TextField
//       label="Password"
//       variant="outlined"
//       name="password"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       value={values.password}
//       error={touched.password && errors.password}
//       helperText={
//         touched.password && errors.password ? errors.password : null
//       }
//     />
//     <Button className="btn" variant="contained" type="submit">
//       Sign Up
//     </Button>
//     <Button className="btn" variant="text" onClick={() => navigate("/admin/login")}>
//       Already an user? Login
//     </Button>
//   </form>
//   )
// }

// export default Signup
import React from 'react'
import UsersSignup from '../components/UsersSignup'

const Signup = () => {
  return (
    <div>
      <UsersSignup />
    </div>
  )
}

export default Signup