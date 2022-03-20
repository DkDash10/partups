import React, { useState } from "react";
import "./categories.css";
import profile from "./profile.png";
import request from "./request.png";
import upload from "./upload.png";
import { Link } from "react-router-dom";

export default function MyProfile(props) {
  let myStyle = {
    color: props.mode === "light" ? "black" : "white", // for toggleMode
    backgroundColor: props.mode === "light" ? "white" : "#1a1c1d",
    // backgroundColor: props.mode==='light'?'white':'#2f3031'     // backup chat body color
  };

  const edittt = () => {
    // Hiding beforeEdit div and displaying afterEdit div------------------------
    let beforeEdit = document.getElementsByClassName("beforeEdit")[0];
    let afterEdit = document.getElementsByClassName("afterEdit")[0];
    beforeEdit.style.display = "none";
    afterEdit.style.display = "flex";

    // Inserting user's profile info into afterEdit before user makes changes----
    let myName = document.getElementById("myName").innerText;
    let myAge = document.getElementById("age").innerText;
    let myGender = document.getElementById("gender").innerText;
    let mySkills = document.getElementById("skills").innerText;
    let aboutMe = document.getElementById("aboutme").innerText;
    let inputVal = document.getElementsByTagName("input");
    inputVal[0].value = myName;
    inputVal[1].value = myAge;
    inputVal[2].value = myGender;
    inputVal[3].value = mySkills;
    inputVal[4].value = aboutMe;
  };

  const [myName, setMyName] = useState("ABC WXYZ");
  const [myAge, setMyAge] = useState("20");
  const [myGender, setMyGender] = useState("Male");
  const [mySkills, setMySkills] = useState("Music, Video Editing");
  const [myAbout, setMyAbout] = useState(
    "Looking for collaborators who are willing to work together on a serious level"
  );
  // const [myPicture, setMyPicture] = useState( <img src={profile} alt=""/>)

  const saveChanges = (e) => {
    let inputVal = document.getElementsByTagName("input");
    setMyName(inputVal[0].value);
    setMyAge(inputVal[1].value);
    setMyGender(inputVal[2].value);
    setMySkills(inputVal[3].value);
    setMyAbout(inputVal[4].value);

    // Hiding afterEdit div and displaying beforeEdit div without making changes--------
    let beforeEdit = document.getElementsByClassName("beforeEdit")[0];
    let afterEdit = document.getElementsByClassName("afterEdit")[0];
    beforeEdit.style.display = "flex";
    afterEdit.style.display = "none";
  };

  const unsaveChanges = () => {
    // Hiding afterEdit div and displaying beforeEdit div without making changes--------
    let beforeEdit = document.getElementsByClassName("beforeEdit")[0];
    let afterEdit = document.getElementsByClassName("afterEdit")[0];
    beforeEdit.style.display = "flex";
    afterEdit.style.display = "none";
  };

  return (
    <div style={myStyle}>
      <section className="showcase">
        <div id="propage">
          {/* <h1 className="primary center"><u>My Profile</u></h1> */}

          <section className="bio">
            <div className="beforeEdit center">
              <div id="beforepic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8MYTIuevVmECOFAAQMaQDCsR8FIDBW_anA&usqp=CAU" alt="" />
                {/* <p className="center mt-3"><Link to="/editprofile"><i onClick={edittt} className="fas fa-user-edit">Edit Profile </i></Link></p> */}
                <p className="center mt-3">
                  <i onClick={edittt} className="mx-2 fas fa-user-edit">
                    Edit Profile
                  </i>
                </p>
              </div>

              <div className="info">
                <p id="myName" className="secondary">
                  {myName}
                </p>
                <p id="age">{myAge}</p>
                <p id="gender">{myGender}</p>
                <p id="skills">{mySkills}</p>
                <p id="aboutme" className="center">
                  {myAbout}
                </p>
              </div>
            </div>

            <div className="afterEdit center">
              <div className="flex-column">
                <i id="pic" className="fas fa-user-circle"></i>
                <i id="cam" className="mb-3 center fas fa-camera"></i>
              </div>

              <div className="info mt-3 mx-5">
                <div className="center secondary mb-2">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="text" className="ml-4 col-form-label">
                        Name
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        id="nameInput"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div id="age" className="center mb-2">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="text" className="col-form-label">
                        Age
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        id="ageInput"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div id="gender" className="center mb-2">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="text" className="col-form-label">
                        Gender
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        id="genderInput"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div id="skills" className="center mb-2">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="text" className="col-form-label">
                        My Skills
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        id="skillsInput"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div id="aboutme" className="center mb-2">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="text" className="col-form-label">
                        About Me
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        id="aboutMeInput"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="buttons"
                  className="mt-5 mb-3 d-flex justify-content-between"
                >
                  <Link
                    onClick={unsaveChanges}
                    to="/about"
                    className="btn btn-dark"
                  >
                    <i className="mx-1 fas fa-arrow-left"></i>Go Back
                  </Link>
                  <Link
                    onClick={saveChanges}
                    to="/myprofile"
                    className="btn btn-dark"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="widgets" className="center">
            <a href="/a">
              <div id="wid1">
                <img src={request} alt="requests" />
                <p className="center tertiary">Connection Requests</p>
              </div>
            </a>

            <Link to="/upload">
              <div id="wid2">
                <img src={upload} alt="upload posts" />
                <p className="center tertiary">Upload Posts</p>
              </div>
            </Link>

            {/* <Link href="/editprofile">
                                <div id="wid3">
                                    <img src={editprofile} alt="edit profile"/>
                                    <p className="center tertiary">Edit Profile</p>
                                </div> 
                            </Link>   */}
          </section>

          <section id="myuploads">
            <p className="center secondary">My Uploads</p>
            <ul>
              <li className="post" id="po1">
                POST 1
              </li>
              <li className="post" id="po2">
                POST 2
              </li>
              <li className="post" id="po3">
                POST 3
              </li>
              <li className="post" id="po4">
                POST 4
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

// import React, { useState } from 'react'
// import './categories.css'
// import FileBase from 'react-file-base64';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../actions/Posts';
// import profile from './profile.png'
// import upload from './upload.png'
// import { Link } from 'react-router-dom'
// import diamond from './diamond.png'

// export default function MyProfile(props) {

//     let myStyle = {
//         color: props.mode==='light'?'black':'white',                     // for toggleMode
//         backgroundColor: props.mode==='light'?'white':'#1a1c1d'
//         // backgroundColor: props.mode==='light'?'white':'#2f3031'     // backup chat body color
//     }

//     const [postData, setPostData]=useState({
//         caption: '', selectedFile: '', skills: ''
//     })

//     const dispatch = useDispatch();

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         dispatch (createPost(postData));
//         // console.log(postData)
//     }

//     const onChange=(e)=>{
//         setPostData({ ...postData, [e.target.name]: e.target.value });
//     }

//     const edittt = () =>{
//         // Hiding beforeEdit div and displaying afterEdit div------------------------
//         let beforeEdit = document.getElementsByClassName('beforeEdit')[0];
//         let afterEdit = document.getElementsByClassName('afterEdit')[0];
//         beforeEdit.style.display = "none";
//         afterEdit.style.display = "flex";

//         // Inserting user's profile info into afterEdit before user makes changes----
//         let myName = document.getElementById('myName').innerText;
//         let myAge = document.getElementById('age').innerText;
//         let myGender = document.getElementById('gender').innerText;
//         let mySkills = document.getElementById('skills').innerText;
//         let aboutMe = document.getElementById('aboutme').innerText;
//         let inputVal = document.getElementsByTagName('input');
//         inputVal[0].value = myName;
//         inputVal[1].value = myAge;
//         inputVal[2].value = myGender;
//         inputVal[3].value = mySkills;
//         inputVal[4].value = aboutMe;
//     }

//     const [myName, setMyName] = useState("ABC WXYZ")
//     const [myAge, setMyAge] = useState("20")
//     const [myGender, setMyGender] = useState("Male")
//     const [mySkills, setMySkills] = useState("Music, Video Editing")
//     const [myAbout, setMyAbout] = useState("Looking for collaborators who are willing to work together on a serious level")
//     // const [myPicture, setMyPicture] = useState( <img src={profile} alt=""/>)

//     const saveChanges = (e) =>{
//         let inputVal = document.getElementsByTagName('input');
//         setMyName(inputVal[0].value);
//         setMyAge(inputVal[1].value);
//         setMyGender(inputVal[2].value);
//         setMySkills(inputVal[3].value);
//         setMyAbout(inputVal[4].value);

//         // Hiding afterEdit div and displaying beforeEdit div without making changes--------
//         let beforeEdit = document.getElementsByClassName('beforeEdit')[0];
//         let afterEdit = document.getElementsByClassName('afterEdit')[0];
//         beforeEdit.style.display = "flex";
//         afterEdit.style.display = "none";
//     }

//     const unsaveChanges = () =>{
//         // Hiding afterEdit div and displaying beforeEdit div without making changes--------
//         let beforeEdit = document.getElementsByClassName('beforeEdit')[0];
//         let afterEdit = document.getElementsByClassName('afterEdit')[0];
//         beforeEdit.style.display = "flex";
//         afterEdit.style.display = "none";
//     }

//     const [uploadBtn, setUploadBtn] = useState("Skill")

//     const uploadSkillwArt = () =>{
//         setUploadBtn(document.getElementById("selectArt").innerText);
//     }
//     const uploadSkillwDesigning = () =>{
//         setUploadBtn(document.getElementById("selectDesigning").innerText);
//     }
//     const uploadSkillwFilmMaking = () =>{
//         setUploadBtn(document.getElementById("selectFilmMaking").innerText);
//     }
//     const uploadSkillwEditing = () =>{
//         setUploadBtn(document.getElementById("selectEditing").innerText);
//     }
//     const uploadSkillwMusic = () =>{
//         setUploadBtn(document.getElementById("selectMusic").innerText);
//     }
//     const uploadSkillwPerformer = () =>{
//         setUploadBtn(document.getElementById("selectPerformer").innerText);
//     }
//     const uploadSkillwMarketting = () =>{
//         setUploadBtn(document.getElementById("selectMarketting").innerText);
//     }
//     const uploadSkillwCoding = () =>{
//         setUploadBtn(document.getElementById("selectCoding").innerText);
//     }

//     const RespUploadwArt = () =>{
//         setUploadBtn(document.getElementById("RespSelectArt").innerText);
//     }
//     const RespUploadwDesigning = () =>{
//         setUploadBtn(document.getElementById("RespSelectDesigning").innerText);
//     }
//     const RespUploadwFilmMaking = () =>{
//         setUploadBtn(document.getElementById("RespSelectFilmMaking").innerText);
//     }
//     const RespUploadwEditing = () =>{
//         setUploadBtn(document.getElementById("RespSelectEditing").innerText);
//     }
//     const RespUploadwMusic = () =>{
//         setUploadBtn(document.getElementById("RespSelectMusic").innerText);
//     }
//     const RespUploadwPerformer = () =>{
//         setUploadBtn(document.getElementById("RespSelectPerformer").innerText);
//     }
//     const RespUploadwMarketting = () =>{
//         setUploadBtn(document.getElementById("RespSelectMarketting").innerText);
//     }
//     const RespUploadwCoding = () =>{
//         setUploadBtn(document.getElementById("RespSelectCoding").innerText);
//     }

//     // const right2Down = () =>{
//     //     console.log("r2D")
//     //     let dropBtn = document.getElementById("dropBtn");
//     //     let mediaQuery = window.matchMedia('(min-width: 480px)')
//     //     if (mediaQuery.matches) {
//     //         // dropBtn.classList.remove("dropend");
//     //         dropBtn.classList.add("dropdown");
//     //       }
//     // }

//     return (
//         <div style={myStyle}>
//                <section className="showcase">

//                     <div id="propage">
//                         {/* <h1 className="primary center"><u>My Profile</u></h1> */}

//                         <section className="bio">
//                             <div className="beforeEdit center">
//                                 <div id="beforepic">
//                                     <img src={profile} alt=""/>
//                                     {/* <p className="center mt-3"><Link to="/editprofile"><i onClick={edittt} className="fas fa-user-edit">Edit Profile </i></Link></p> */}
//                                     <p className="center mt-3"><i onClick={edittt} className="mx-2 fas fa-user-edit">Edit Profile</i></p>

//                                 </div>

//                                 <div className="info">
//                                     <p id="myName" className="secondary">{myName}</p>
//                                     <p id="age">{myAge}</p>
//                                     <p id="gender">{myGender}</p>
//                                     <p id="skills">{mySkills}</p>
//                                     <p id="aboutme" className="center">{myAbout}</p>
//                                     <div id="myAcBtn" className='my-3'>
//                                     <button className='btn dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="mx-1 fas fa-trophy"></i>Rewards</button>
//                                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                             <li><button className="dropdown-item">Ace</button></li>
//                                             <li><button className="mx-0 dropdown-item"><img src={diamond} alt=""/>Diamond</button></li>
//                                             <li><button className="mx-0 dropdown-item"><img src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-crown-birthday-party-tulpahn-outline-color-tulpahn.png" alt=""/>Crown</button></li>
//                                             <li><button className="mx-0 dropdown-item">Awesome</button></li>
//                                         </ul>
//                                     <button className='btn dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="mx-1 fas fa-star-half-alt"></i>Highlights</button>
//                                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                             <li><button className="dropdown-item">Most Awarded</button></li>
//                                             <li><button className="dropdown-item">Most Liked</button></li>
//                                             <li><button className="dropdown-item">Most Saved</button></li>
//                                         </ul>
//                                 </div>
//                                 </div>
//                             </div>

//                             <div className="afterEdit center">
//                                 <div>
//                                     <i id="pic" className="fas fa-user-circle"></i>
//                                     {/* <label htmlFor="file"><i id="cam" className="mb-3 center fas fa-camera">Change Profile Picture</i></label> */}
//                                 </div>

//                                 <div className="info">
//                                     <div className="center secondary mb-2">
//                                     <div className="row g-2 align-items-center">
//                                         <div className="col-auto">
//                                             <label htmlFor="text" className="ml-2 col-form-label">Name</label>
//                                         </div>
//                                         <div className="col-auto">
//                                             <input id="nameInput" type="text" className="form-control"/>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <div id="age" className="center mb-1">
//                                     <div className="row g-2 align-items-center">
//                                         <div className="col-auto">
//                                             <label htmlFor="text" className="col-form-label">Age</label>
//                                         </div>
//                                         <div className="col-auto">
//                                             <input id="ageInput" type="text" className="form-control"/>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <div id="gender" className="center mb-1">
//                                     <div className="row g-2 align-items-center">
//                                         <div className="col-auto">
//                                             <label htmlFor="text" className="col-form-label">Gender</label>
//                                         </div>
//                                         <div className="col-auto">
//                                             <input id="genderInput" type="text" className="form-control"/>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <div id="skills" className="center mb-1">
//                                     <div className="row g-2 align-items-center">
//                                         <div className="col-auto">
//                                             <label htmlFor="text" className="col-form-label">My Skills</label>
//                                         </div>
//                                         <div className="col-auto">
//                                             <input id="skillsInput" type="text" className="form-control"/>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <div id="aboutme" className="center mb-1">
//                                     <div className="row g-2 align-items-center">
//                                         <div className="col-auto">
//                                             <label htmlFor="text" className="col-form-label">One Liner</label>
//                                         </div>
//                                         <div className="col-auto">
//                                             <input id="aboutMeInput" type="text" className="form-control"/>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <div id="changePic" className="center mb-1">
//                                     <div className="row g-2 align-items-center">
//                                         <div className="col-auto">
//                                             <label htmlFor="text" className="col-form-label">Change Photo</label>
//                                         </div>
//                                         <div className="col-auto">
//                                         <input type="file" id="file"/>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <div id="buttons" className='mt-5 mb-3 d-flex justify-content-between'>
//                                         <Link onClick={unsaveChanges} to="/myprofile" className="btn btn-dark"><i className="mx-1 fas fa-arrow-left"></i>Go Back</Link>
//                                         <Link onClick={saveChanges} to="/myprofile" className="btn btn-dark">Save Changes</Link>
//                                     </div>
//                                 </div>
//                             </div>

//                         </section>

//                         <section id="widgets" className="center">
//                             {/* <a href="/a">
//                                 <div id="wid1">
//                                     <img src={request} alt="requests"/>
//                                     <p className="center tertiary">Connection Requests</p>
//                                 </div>
//                             </a> */}

//                             {/* <Link to="/upload"> */}

//                                 <div id="wid2" data-bs-toggle="modal" data-bs-target="#uploadModal">
//                                     <img src={upload} alt="upload posts"/>
//                                     <p className="center tertiary">Upload Posts</p>
//                                 </div>

//                                 <div className="modal fade" id="uploadModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div className="modal-dialog modal-dialog-centered">
//                                     <div className="modal-content">
//                                         <div className="modal-header">
//                                             <h5 className="modal-title" id="exampleModalLabel">Unleash The Creativity</h5>
//                                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                         </div>

//                                         <form  onSubmit={handleSubmit} id="main">
//                                             {/* Share what you feel */}
//                                             <div id="box">
//                                                 <div className="d-flex flex-row">
//                                                     <div id="uploadedImg">
//                                                         <input type="file" id="file"/>
//                                                             <label htmlFor="file" style={{color: "black"}}><i className="center fas fa-plus-circle"></i><p className='center'>Add image/ video</p></label>
//                                                             {/* <i className="far fa-image"></i>
//                                                             <i className="fas fa-video"></i> */}
//                                                     </div>
//                                                     <p id="caption">
//                                                         <textarea className="form-control" placeholder="Share what you feel !!!" id="floatingTextarea"
//                                                          name="caption"
//                                                          value={postData.caption}
//                                                          onChange={onChange}></textarea>
//                                                     </p>
//                                                 </div>
//                                                 {/* <div id="postSkill" className="center row g-2 align-items-center"> */}

//                                                 <div id="postSkill" className="mx-3 mt-3 d-flex flex-column center">
//                                                     <div id="dropBtn" className="btn-group dropend">
//                                                         <label htmlFor="button" style={{color: "black"}}>Skill to which the post is related</label>
//                                                         <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                                                             {uploadBtn}
//                                                         </button>
//                                                         <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
//                                                             <li id="selectArt" onClick={uploadSkillwArt} className="dropdown-item">Art</li>
//                                                             <li id="selectDesigning" onClick={uploadSkillwDesigning} className="dropdown-item">Designing</li>
//                                                             <li id="selectFilmMaking" onClick={uploadSkillwFilmMaking} className="dropdown-item">Film Making</li>
//                                                             <li id="selectEditing" onClick={uploadSkillwEditing} className="dropdown-item">Editing</li>
//                                                             <li id="selectMusic" onClick={uploadSkillwMusic} className="dropdown-item">Music</li>
//                                                             <li id="selectPerformer" onClick={uploadSkillwPerformer} className="dropdown-item">Performer</li>
//                                                             <li id="selectMarketting" onClick={uploadSkillwMarketting} className="dropdown-item">Marketting</li>
//                                                             <li id="selectCoding" onClick={uploadSkillwCoding} className="dropdown-item">Coding</li>
//                                                         </ul>
//                                                     </div>
//                                                     <div className="dropup">
//                                                         <label htmlFor="button" style={{color: "black"}}>Skill to which the post is related</label>
//                                                         <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
//                                                             {uploadBtn}
//                                                         </button>
//                                                         <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
//                                                             <li id="RespSelectArt" onClick={RespUploadwArt} className="dropdown-item">Art</li>
//                                                             <li id="RespSelectDesigning" onClick={RespUploadwDesigning} className="dropdown-item">Designing</li>
//                                                             <li id="RespSelectFilmMaking" onClick={RespUploadwFilmMaking} className="dropdown-item">Film Making</li>
//                                                             <li id="RespSelectEditing" onClick={RespUploadwEditing} className="dropdown-item">Editing</li>
//                                                             <li id="RespSelectMusic" onClick={RespUploadwMusic} className="dropdown-item">Music</li>
//                                                             <li id="RespSelectPerformer" onClick={RespUploadwPerformer} className="dropdown-item">Performer</li>
//                                                             <li id="RespSelectMarketting" onClick={RespUploadwMarketting} className="dropdown-item">Marketting</li>
//                                                             <li id="RespSelectCoding" onClick={RespUploadwCoding} className="dropdown-item">Coding</li>
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                         <div className="modal-footer">
//                                             <button type="button" className="btn">Upload</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 </div>
//                             {/* </Link> */}

//                             {/* <Link href="/editprofile">
//                                 <div id="wid3">
//                                     <img src={editprofile} alt="edit profile"/>
//                                     <p className="center tertiary">Edit Profile</p>
//                                 </div>
//                             </Link>   */}
//                         </section>

//                         <section id="myuploads">
//                             <p className="center secondary">My Uploads</p>
//                             <ul>
//                                 <li className="post" id="po1">POST 1</li>
//                                 <li className="post" id="po2">POST 2</li>
//                                 <li className="post" id="po3">POST 3</li>
//                                 <li className="post" id="po4">POST 4</li>
//                             </ul>
//                         </section>
//                     </div>
//                 </section>
//             </div>
//     )
// }
