// import React from "react";
// import { Link } from "react-router-dom";
// import "./skillform.css";

// export default function SkillForm() {
//   const resetForm = () => {
//     // let inputVal = document.getElementsByTagName("input")[0];     // not working

//     //lengthy method to reset
//     let inputVal1 = document.getElementById("inputText1");
//     let inputVal2 = document.getElementById("inputText2");
//     let inputVal3 = document.getElementById("inputText3");
//     let inputVal4 = document.getElementById("inputText4");
//     let inputVal5 = document.getElementById("inputText5");

//     inputVal1.value = "";
//     inputVal2.value = "";
//     inputVal3.value = "";
//     inputVal4.value = "";
//     inputVal5.value = "";
//     // Array.from(inputVal).forEach(function(element){
//     // })
//   };
//   const submitForm = () => {
//     // showing submitted alert msg under every condition
//     let inputVal1 = document.getElementById("inputText1");
//     let inputVal2 = document.getElementById("inputText2");
//     let inputVal3 = document.getElementById("inputText3");
//     let inputVal4 = document.getElementById("inputText4");
//     let inputVal5 = document.getElementById("inputText5");

//     if (
//       inputVal1.value ||
//       inputVal2.value ||
//       inputVal3.value ||
//       inputVal4.value ||
//       inputVal5.value !== null
//     ) {
//       window.alert("Your form has been submitted");
//       // let alertSuccess = document.getElementById('alertSuccess');
//       // let alertFailure = document.getElementById('alertFailure');
//       // alertFailure.classList.remove('show');
//       // alertSuccess.classList.add('show');
//     } else {
//       window.alert("Your form has been rejected");
//       // let alertSuccess = document.getElementById('alertSuccess');
//       // let alertFailure = document.getElementById('alertFailure');
//       // alertSuccess.classList.remove('show');
//       // alertFailure.classList.add('show');
//     }
//   };

//   return (
//     <>
//       {/* BOOTSTRAP ALERT MESSAGES AFTER SUBMITTING THE FORM */}

//       {/* <div id="alertSuccess" className="alert alert-success alert-dismissible fade " role="alert">
//             <strong>Thank You!</strong> Your form has been submitted
//             <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         </div>

//         <div id="alertFailure" className="alert alert-danger alert-dismissible fade " role="alert">
//             <strong>Sorry!</strong> Your form has been rejected due to an error.
//             <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         </div> */}

//       <div className="container-sm my-3">
//         <h4 className="mb-4">
//           Fill & Submit the below form to help us connect you to new people
//         </h4>

//         <div className="d-flex mt-4">
//           <label htmlFor="inputText" className="form-label">
//             Primary Skill
//           </label>
//           <input
//             type="text"
//             id="inputText1"
//             className="inputText form-control"
//             placeholder="Enter a skill you posses"
//             aria-describedby="textHelpBlock"
//           />
//           {/* <div id="textHelpBlock" className="form-text">
//                     Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
//                 </div> */}
//         </div>

//         <div className="d-flex mt-4">
//           <label htmlFor="inputText" className="form-label">
//             Looking For
//           </label>
//           <input
//             type="text"
//             id="inputText3"
//             className="inputText form-control"
//             placeholder="Enter what skilled people are you looking for"
//             aria-describedby="textHelpBlock"
//           />
//         </div>

//         <div className="d-flex mt-4">
//           <label htmlFor="inputText" className="form-label">
//             Age
//           </label>
//           <input
//             type="text"
//             id="inputText5"
//             className="inputText form-control"
//             placeholder="Enter your level of education"
//             aria-describedby="textHelpBlock"
//           />
//         </div>

//         <div className="d-flex mt-4">
//           <label htmlFor="inputText" className="form-label">
//             Gender
//           </label>
//           <div className="radioCollection d-flex justify-content-start">
//             <div className="form-check mx-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="flexRadioDefault"
//                 id="flexRadioDefault1"
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault1">
//                 Male
//               </label>
//             </div>
//             <div className="form-check mx-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="flexRadioDefault"
//                 id="flexRadioDefault2"
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 Female
//               </label>
//             </div>
//             <div className="form-check mx-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="flexRadioDefault"
//                 id="flexRadioDefault3"
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault3">
//                 Transgender
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="d-flex mt-4">
//             <label htmlFor="inputText" className="form-label">
//               Message
//             </label>
//             <input
//               type="text"
//               id="inputText5"
//               className="inputText form-control"
//               placeholder="Enter message to be displayed on your profile"
//               aria-describedby="textHelpBlock"
//             />
//           </div>
//         <div className="RSbutton d-flex justify-content-between my-5">
//           <button className="btn btn-dark" onClick={resetForm}>
//             Reset
//           </button>
//           <Link to="/home">
//             <button className="btn btn-dark" onClick={submitForm}>
//               Submit
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
