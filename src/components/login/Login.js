import React, { useState,useEffect,useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginImg from "./loginImg.svg";
import{UserContext} from "../../App";
import "./login.scss";


const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {dispatch} = useContext(UserContext);

  let history = useHistory();

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);// eslint-disable-line react-hooks/exhaustive-deps
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Sorry the format of the email is incorrect";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
    const { email, password } = values;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      dispatch({type:"USER", payload:true})
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account logged-in successfully", "success");
      history.push("/home");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-80">
        <div className="container-sm">
          <div className="row align-items-center">
          <div className="col-lg-5 col-xl-6 ms-xl-auto px-lg-4 text-center text-primary">
                <img
                  className="img-fluid mb-4"
                  width="300"
                  src={LoginImg}
                  alt=""
                  img-classname="img-responsive"
                  style={{ transform: "rotate(-5deg)" }}
                />
                <p className="lead text-muted">
                  Not yet our member?<Link className="Rightlogin" to="/signup"> Signup</Link>
                </p>
              </div>
            <div className="card">
              <div className="card-body p-lg-5">
                <h3 className="shadow-sm mt-2 p-2 text-center rounded font-weight-bold">
                  Login
                </h3>
                <form className="login-form" onSubmit={handleSubmit}>
                 
                  <div className="input-field mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email here"
                      value={values.email}
                      onChange={onChange}
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <p>{formErrors.email}</p>
                  <div className="input-field mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password here"
                      value={values.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                      minLength={5}
                    />
                  </div>
                  <p>{formErrors.password}</p>
                  <button type="submit" className="btn-1">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
