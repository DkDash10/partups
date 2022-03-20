import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./login.scss";
import "./skillform.css"
import SignupImg from "./signupImg.svg";
import { signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import Select from 'react-select'

const Signup = (props) => {
  // const [gender,setGender]=useState();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    mainskill: "",
    bio: "",
    });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  // const [isSignup, setIsSignup] = useState(false);

  let history = useHistory();

  // const [showPassword, setShowPassword] = useState(false);
  // const handleShowPassword = () => setShowPassword(!showPassword);

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
    // setIsSubmit(true);
    if (Signup) {
      dispatch(signup(values, history));
      console.log(skill)

      // props.showAlert("Account logged-in successfully", "success");
    }
    // else {
    // dispatch(login(values, history));
    // props.showAlert("Invalid Details", "danger");
    // }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const [skillSelectBtn, setSkillSelectBtn] = useState("Select Skill")

  //   const RespUploadwArt = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectArt").innerText);
  //       console.log("art")
  //   }
  //   const RespUploadwDesigning = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectDesigning").innerText);
  //   }
  //   const RespUploadwFilmMaking = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectFilmMaking").innerText);
  //   }
  //   const RespUploadwEditing = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectEditing").innerText);
  //   }
  //   const RespUploadwMusic = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectMusic").innerText);
  //   }
  //   const RespUploadwPerformer = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectPerformer").innerText);
  //   }
  //   const RespUploadwMarketting = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectMarketting").innerText);
  //   }
  //   const RespUploadwCoding = () => {
  //       setSkillSelectBtn(document.getElementById("RespSelectCoding").innerText);
  //   }
  
  var skilltype=[
    {
      value:1,
      label:"Art"
    },
    {
      value:2,
      label:"Performer"
    },
    {
      value:3,
      label:"Coder"
    },
    {
      value:4,
      label:"Marketting"
    },
    {
      value:5,
      label:"Music"
    }
  ]
  const [ skill, getskill]=useState();
  let handleClick =(e)=>{
    getskill(Array.isArray(e)?e.map(x=>x.label):[]);
  }
 let skillhook=()=>{
   const selection =document.getElementById('selection').innerText
   console.log(selection)
 }
  
  return (
    <div className="App">
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-80">
        <div className="container-sm">
          <div className="loginpage row align-items-center d-flex flex-row">
            <div id="cardtemp">
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
                      // type={showPassword ? 'text' : 'password'}
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password here"
                      value={values.password}
                      onChange={onChange}
                      //  handleShowPassword={handleShowPassword}
                      minLength={5}
                    />
                  </div>
                  <p>{formErrors.password}</p>
                  <button
                    type="button"
                    className="btn-1 "
                    data-bs-toggle="modal"
                    data-bs-target="#formSignup"
                  >
                    Signup
                  </button>
                  <div
                    className="modal fade"
                    id="formSignup"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Fill & Submit the below form to help us connect you
                            to new people
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                           <div className="d-flex mt-4">
                            <label htmlFor="inputText" >Skill</label>
                            <div className="dropdown"    value={values.mainskill}
                                name="mainskill"
                                onChange={onChange}
                            >
                              {/* <label htmlFor="button" style={{ color: "black" }}>Select Skill</label> */}
                               {/* <span
                                className="btn btn-light dropdown-toggle"
                                // type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                value={values.mainskill}
                                name="mainskill"
                                onChange={onChange}
                              > */}
                              <Select id="selection"  
                              options={skilltype} onClick={handleClick}
                             />
                                 {/* {skillSelectBtn}  */}
                              {/* </span> */}
                            {/*  <ul
                                className="dropdown-menu dropdown-menu-dark"
                                aria-labelledby="dropdownMenuButton2"
                              >
                                <li
                                  id="RespSelectArt"
                                  // onClick={RespUploadwArt}
                                  className="dropdown-item"
                                >
                                  Art
                                </li>
                                <li
                                  id="RespSelectDesigning"
                                  // onClick={RespUploadwDesigning}
                                  className="dropdown-item"
                                >
                                  Designing
                                </li>
                                <li
                                  id="RespSelectFilmMaking"
                                  // onClick={RespUploadwFilmMaking}
                                  className="dropdown-item"
                                >
                                  Film Making
                                </li>
                                <li
                                  id="RespSelectEditing"
                                  // onClick={RespUploadwEditing}
                                  className="dropdown-item"
                                >
                                  Editing
                                </li>
                                <li
                                  id="RespSelectMusic"
                                  // onClick={RespUploadwMusic}
                                  className="dropdown-item"
                                >
                                  Music
                                </li>
                                <li
                                  id="RespSelectPerformer"
                                  // onClick={RespUploadwPerformer}
                                  className="dropdown-item"
                                >
                                  Performer
                                </li>
                                <li
                                  id="RespSelectMarketting"
                                  // onClick={RespUploadwMarketting}
                                  className="dropdown-item"
                                >
                                  Marketting
                                </li>
                                <li
                                  id="RespSelectCoding"
                                  // onClick={RespUploadwCoding}
                                  className="dropdown-item"
                                >
                                  Coding
                                </li>
                              </ul> */}
                            </div>
                            {/* <input
                                            type="text"
                                            id="inputText1"
                                            className="inputText form-control mx-2"
                                            placeholder="Enter a skill you posses"
                                            aria-describedby="textHelpBlock"
                                        /> */}
                          </div> 

                          <div className="d-flex mt-4">
                            <label htmlFor="inputText" className="form-label">
                              Age
                            </label>
                            <input
                              type="text"
                              name="age"
                              id="inputText15"
                              className="inputText form-control"
                              placeholder="Enter your Age"
                              aria-describedby="textHelpBlock"
                              value={values.age}
                              onChange={onChange}
                            />
                          </div>

                          <div className="d-flex mt-4">
                            <label htmlFor="inputText" className="form-label">
                              Gender
                            </label>
                            <div className="radioCollection d-flex justify-content-start">
                              <div className="form-check mx-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  value={values.gender}
                                  // onChange={e=>setGender(e.target.value)}
                                  onChange={onChange}
                                  id="flexRadioDefault1"
                                  />
                                  {/* {console.log(gender)} */}
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check mx-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="flexRadioDefault2"
                                  name="gender"
                                  value={values.gender}
                                  onChange={onChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  Female
                                </label>
                              </div>
                              <div className="form-check mx-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="flexRadioDefault3"
                                  name="gender"
                                  value={values.gender}
                                  onChange={onChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault3"
                                >
                                  Transgender
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex mt-4">
                            <label htmlFor="inputText" className="form-label">
                              Bio
                            </label>
                            <input
                              type="text"
                              id="inputText5"
                              className="inputText form-control"
                              placeholder="Enter message to be displayed on your profile"
                              aria-describedby="textHelpBlock"
                              name="bio"
                              value={values.bio}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" onClick={skillhook} className="btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p id="leadSecondary" className="lead text-muted">
                    Are you already a member?
                    <Link className="Rightlogin" to="/">
                      {" "}
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            <div className="loginImg col-lg-5 col-xl-6 px-lg-4 text-center text-primary">
              <img
                className="img-fluid mb-4"
                width="300"
                src={SignupImg}
                alt=""
                img-classname="img-responsive"
                style={{ transform: "rotate(10deg)" }}
              />
              <p className="lead text-muted">
                Are you already a member?
                <Link className="Rightlogin" to="/">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;



// import React, { useState } from "react";
// import { useHistory, Link } from "react-router-dom";
// import "./login.scss";
// import "./skillform.css"
// import SignupImg from "./signupImg.svg";
// import { signup } from "../../actions/auth";
// import { useDispatch } from "react-redux";

// const Signup = (props) => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const dispatch = useDispatch();
//   // const [isSignup, setIsSignup] = useState(false);

//   let history = useHistory();

//   // const [showPassword, setShowPassword] = useState(false);
//   // const handleShowPassword = () => setShowPassword(!showPassword);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "Sorry the format of the email is incorrect";
//     }
//     if (!values.password) {
//       errors.password = "Password is required!";
//     }
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormErrors(validate(values));
//     // setIsSubmit(true);
//     if (Signup) {
//       dispatch(signup(values, history));
//       // props.showAlert("Account logged-in successfully", "success");
//     }
//     // else {
//     // dispatch(login(values, history));
//     // props.showAlert("Invalid Details", "danger");
//     // }
//   };
//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

  
//   return (
//     <div className="App">
//       <div className="page-holder align-items-center py-4 bg-gray-100 vh-80">
//         <div className="container-sm">
//           <div className="loginpage row align-items-center d-flex flex-row">
//             <div id="cardtemp">
//               <div className="card-body p-lg-5">
//                 <h3 className="shadow-sm mt-2 p-2 text-center rounded">
//                   Signup
//                 </h3>
//                 <form className="signup-form" onSubmit={handleSubmit}>
//                   <div className="input-field mb-3">
//                     <label htmlFor="username" className="form-label mb-3">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="username"
//                       name="username"
//                       placeholder="Enter your username here"
//                       value={values.username}
//                       onChange={onChange}
//                       aria-describedby="emailHelp"
//                     />
//                   </div>
//                   <p>{formErrors.username}</p>
//                   <div className="input-field mb-3">
//                     <label htmlFor="email" className="form-label">
//                       Email Id
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       placeholder="Enter your email here"
//                       value={values.email}
//                       onChange={onChange}
//                       aemailria-describedby="emailHelp"
//                     />
//                   </div>
//                   <p>{formErrors.email}</p>
//                   <div className="input-field mb-3">
//                     <label htmlFor="password" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       // type={showPassword ? 'text' : 'password'}
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       placeholder="Enter your password here"
//                       value={values.password}
//                       onChange={onChange}
//                       //  handleShowPassword={handleShowPassword}
//                       minLength={5}
//                     />
//                   </div>
//                   <p>{formErrors.password}</p>
//                   <button
//                     type="submit"
//                     className="btn-1 "
//                     data-bs-toggle="modal"
//                     data-bs-target="#formSignup"
//                   >
//                     Signup
//                   </button>
//                   <div
//                     className="modal fade"
//                     id="formSignup"
//                     tabIndex="-1"
//                     aria-labelledby="exampleModalLabel"
//                     aria-hidden="true"
//                   >
//                     <div className="modal-dialog modal-dialog-centered">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h5 className="modal-title" id="exampleModalLabel">
//                             Fill & Submit the below form to help us connect you
//                             to new people
//                           </h5>
//                           <button
//                             type="button"
//                             className="btn-close"
//                             data-bs-dismiss="modal"
//                             aria-label="Close"
//                           ></button>
//                         </div>
//                         <div className="modal-body">
//                           <div className="d-flex mt-4">
//                             <label htmlFor="inputText">Skill</label>
//                             <div className="dropdown">
//                               {/* <label htmlFor="button" style={{ color: "black" }}>Select Skill</label> */}
//                               <button
//                                 className="btn btn-light dropdown-toggle"
//                                 type="button"
//                                 id="dropdownMenuButton2"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 {skillSelectBtn}
//                               </button>
//                               <ul
//                                 className="dropdown-menu dropdown-menu-dark"
//                                 aria-labelledby="dropdownMenuButton2"
//                               >
//                                 <li
//                                   id="RespSelectArt"
//                                   onClick={RespUploadwArt}
//                                   className="dropdown-item"
//                                 >
//                                   Art
//                                 </li>
//                                 <li
//                                   id="RespSelectDesigning"
//                                   onClick={RespUploadwDesigning}
//                                   className="dropdown-item"
//                                 >
//                                   Designing
//                                 </li>
//                                 <li
//                                   id="RespSelectFilmMaking"
//                                   onClick={RespUploadwFilmMaking}
//                                   className="dropdown-item"
//                                 >
//                                   Film Making
//                                 </li>
//                                 <li
//                                   id="RespSelectEditing"
//                                   onClick={RespUploadwEditing}
//                                   className="dropdown-item"
//                                 >
//                                   Editing
//                                 </li>
//                                 <li
//                                   id="RespSelectMusic"
//                                   onClick={RespUploadwMusic}
//                                   className="dropdown-item"
//                                 >
//                                   Music
//                                 </li>
//                                 <li
//                                   id="RespSelectPerformer"
//                                   onClick={RespUploadwPerformer}
//                                   className="dropdown-item"
//                                 >
//                                   Performer
//                                 </li>
//                                 <li
//                                   id="RespSelectMarketting"
//                                   onClick={RespUploadwMarketting}
//                                   className="dropdown-item"
//                                 >
//                                   Marketting
//                                 </li>
//                                 <li
//                                   id="RespSelectCoding"
//                                   onClick={RespUploadwCoding}
//                                   className="dropdown-item"
//                                 >
//                                   Coding
//                                 </li>
//                               </ul>
//                             </div>
//                             {/* <input
//                                             type="text"
//                                             id="inputText1"
//                                             className="inputText form-control mx-2"
//                                             placeholder="Enter a skill you posses"
//                                             aria-describedby="textHelpBlock"
//                                         /> */}
//                           </div>

//                           <div className="d-flex mt-4">
//                             <label htmlFor="inputText" className="form-label">
//                               Age
//                             </label>
//                             <input
//                               type="text"
//                               id="inputText5"
//                               className="inputText form-control"
//                               placeholder="Enter your Age"
//                               aria-describedby="textHelpBlock"
//                             />
//                           </div>

//                           <div className="d-flex mt-4">
//                             <label htmlFor="inputText" className="form-label">
//                               Gender
//                             </label>
//                             <div className="radioCollection d-flex justify-content-start">
//                               <div className="form-check mx-3">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault1"
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor="flexRadioDefault1"
//                                 >
//                                   Male
//                                 </label>
//                               </div>
//                               <div className="form-check mx-3">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor="flexRadioDefault2"
//                                 >
//                                   Female
//                                 </label>
//                               </div>
//                               <div className="form-check mx-3">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault3"
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor="flexRadioDefault3"
//                                 >
//                                   Transgender
//                                 </label>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="d-flex mt-4">
//                             <label htmlFor="inputText" className="form-label">
//                               Message
//                             </label>
//                             <input
//                               type="text"
//                               id="inputText5"
//                               className="inputText form-control"
//                               placeholder="Enter message to be displayed on your profile"
//                               aria-describedby="textHelpBlock"
//                             />
//                           </div>
//                         </div>
//                         <div className="modal-footer">
//                           <button type="button" className="btn">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <p id="leadSecondary" className="lead text-muted">
//                     Are you already a member?
//                     <Link className="Rightlogin" to="/">
//                       {" "}
//                       Login
//                     </Link>
//                   </p>
//                 </form>
//               </div>
//             </div>

//             <div className="loginImg col-lg-5 col-xl-6 px-lg-4 text-center text-primary">
//               <img
//                 className="img-fluid mb-4"
//                 width="300"
//                 src={SignupImg}
//                 alt=""
//                 img-classname="img-responsive"
//                 style={{ transform: "rotate(10deg)" }}
//               />
//               <p className="lead text-muted">
//                 Are you already a member?
//                 <Link className="Rightlogin" to="/">
//                   {" "}
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

