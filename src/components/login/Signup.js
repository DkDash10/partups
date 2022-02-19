
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./login.scss";
import SignupImg from "./signupImg.svg";
import { GoogleLogin } from 'react-google-login';
import Google from "./google.png";
// import Facebook from "./facebook.png"

const Signup = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const dispatch = useDispatch();

  let history = useHistory();

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]); // eslint-disable-line react-hooks/exhaustive-deps
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
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
    const { username, email, password } = values;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/home");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
 
  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  //   // console.log("yo");

  // };
  const googleSuccess = async (res) => {
    // const result = res?.profileObj;
    // const token = res?.tokenId;

    // try {
    //   dispatch({ type: AUTH, data: { result, token } });

    //   history.push('/home');
    // } catch (error) {
    //   console.log(error);
    // }
console.log(res);
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

 
  return (
    <div className="App">
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-80">
        <div className="container-sm">
          <div className="row align-items-center">
            <div className="card">
              <div className="card-body p-lg-5">
                <h3 className="shadow-sm mt-2 p-2 text-center rounded">
                  Signup
                </h3>
                <form className="signup-form" onSubmit={handleSubmit}>
                  <div className="input-field mb-3">
                    <label htmlFor="username" className="form-label mb-3">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username here"
                      value={values.username}
                      onChange={onChange}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <p>{formErrors.username}</p>
                  <div className="input-field mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email here"
                      value={values.email}
                      onChange={onChange}
                      aemailria-describedby="emailHelp"
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
                      id="password"
                      name="password"
                      placeholder="Enter your password here"
                      value={values.password}
                      onChange={onChange}
                      minLength={5}
                    />
                  </div>
                  <p>{formErrors.password}</p>
                  <button type="submit" className="btn-1 ">
                    Signup
                  </button>
                 
                </form>
                {/* <div className="loginButton google" onClick={google} >

            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" >
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div> */}
              <GoogleLogin
            clientId="250759915933-vrgts2h10j4nstco7kucavu6kt13k8s3.apps.googleusercontent.com"
            render={(renderProps) => (
              <div type="button" onClick={renderProps.onClick}>
                 <img src={Google} alt="" className="icon" />
                Google Sign In
              </div>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
              </div>
            </div>

              <div className="col-lg-5 col-xl-6 ms-xl-auto px-lg-4 text-center text-primary">
                <img
                  className="img-fluid mb-4"
                  width="300"
                  src={SignupImg}
                  alt=""
                  img-classname="img-responsive"
                  style={{ transform: "rotate(10deg)" }}
                />
                <p className="lead text-muted">
                  Are you already a member?<Link className="Rightlogin" to="/"> Login</Link>
                </p>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
