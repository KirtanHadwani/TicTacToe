import React, { useState } from "react";
import "./Form.css";
import Tictactoe from "./Tictactoe";

function Form() {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState();
  const [flag, setFlag] = useState(1);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");

    if (
      (email === "kirtan@gmail.com" && password === "kirtan18") ||
      (email === "bhargav@gmail.com" && password === "bhargav18")
    ) {
      setFormError(null);
      setFlag(0);
    } else {
      setFormError("Please Enter valid Email & Password!");
    }
  };

  const logoutHandler = () => {
    setFlag(1);
  };

  return (
    <div>
      {flag ? (
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="form">
              <div className="field">
                <label>Email</label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              </div>
              <p className="error">{formError}</p>
              <button className="submit" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button className="logout" type="submit" onClick={logoutHandler}>
          Logout
        </button>
      )}
      {!flag && <Tictactoe input={input}></Tictactoe>}
    </div>
  );

  // const initialValues = { email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  // const [flag, setFlag] = useState(0);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(flag);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setFormValues('');
  //   setFormErrors(validate(formValues));
  //   if (
  //       (values.email == correctid1 && values.password == correctpass1) ||
  //       (values.email == correctid2 && values.password == correctpass2)
  //     ){
  //         setFlag(1);
  //         console.log("equal");
  //     }
  //     else{
  //       errors.password = "Incorrect password and email!";
  //         setFlag(0);
  //         console.log("not equal");
  //     }

  //   setIsSubmit(true);
  // };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const correctpass1 = "kirtan18";
  //   const correctid1 = "kirtan@gmail.com";
  //   const correctpass2 = "bhargav18";
  //   const correctid2 = "bhargav@gmail.com";

  // if (
  //   (values.email == correctid1 && values.password == correctpass1) ||
  //   (values.email == correctid2 && values.password == correctpass2)
  // ){
  //     flag = true;
  //     console.log("equal");
  // }
  // else{
  //     flag = false;
  //     console.log("not equal");
  // }

  // if (!values.email) {
  //   errors.email = "Email is required!";
  //   setFlag(0);
  // } else if (!regex.test(values.email)) {
  //   errors.email = "This is not a valid email format!";
  //   setFlag(0);
  // } else if (values.email !== correctid1 &&
  //   values.email !== correctid2) {
  //   errors.email = "Incorrect Email!";
  //   setFlag(0);
  // }
  // if (!values.password) {
  //   errors.password = "Password is required";
  //   setFlag(0);
  // } else if (values.password.length < 4) {
  //   errors.password = "Password must be more than 4 characters";
  //   setFlag(0);
  // } else if (values.password.length > 10) {
  //   errors.password = "Password cannot exceed more than 10 characters";
  //   setFlag(0);
  // } else if (
  //   values.password !== correctpass1 &&
  //   values.password !== correctpass2
  // ) {
  //   errors.password = "Incorrect password!";
  //   setFlag(0);
  // }
  // return flag;
  //   return errors;
  // };
  // console.log(flag);

  // return (
  //   <div className="Form">
  //     <form onSubmit={handleSubmit}>
  //       <h1>Login Form</h1>

  //       <div className="form">
  //         <div className="field">
  //           <label>Email</label>
  //           <input
  //             className="input"
  //             type="text"
  //             name="email"
  //             placeholder="Email"
  //             value={formValues.email}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <p>{formErrors.email}</p>
  //         <div className="field">
  //           <label>Password</label>
  //           <input
  //             className="input"
  //             type="password"
  //             name="password"
  //             placeholder="Password"
  //             value={formValues.password}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <p>{formErrors.password}</p>
  //         <button className="btn" type="submit">
  //           Login
  //         </button>
  //       </div>
  //     </form>
  //     {/* <Tictactoe></Tictactoe> */}
  //     <div></div>
  //     {flag ? (
  //       <Tictactoe></Tictactoe>
  //     ) : (
  //       console.log("Enter correct id and password!")
  //     )}
  //   </div>
  // );
}

export default Form;
