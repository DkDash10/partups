
import React, { useState } from 'react'
import './categories.css'
import profile from './profile.png'
import request from './request.png'
import upload from './upload.png'
import { Link } from 'react-router-dom'

export default function MyProfile(props) {

    let myStyle = {
        color: props.mode==='light'?'black':'white',                     // for toggleMode
        backgroundColor: props.mode==='light'?'white':'#1a1c1d'      
        // backgroundColor: props.mode==='light'?'white':'#2f3031'     // backup chat body color   
    }

    const edittt = () =>{

        // Hiding beforeEdit div and displaying afterEdit div------------------------
        let beforeEdit = document.getElementsByClassName('beforeEdit')[0];
        let afterEdit = document.getElementsByClassName('afterEdit')[0];
        beforeEdit.style.display = "none";
        afterEdit.style.display = "flex";

        // Inserting user's profile info into afterEdit before user makes changes----
        let myName = document.getElementById('myName').innerText;
        let myAge = document.getElementById('age').innerText;
        let myGender = document.getElementById('gender').innerText;
        let mySkills = document.getElementById('skills').innerText;
        let aboutMe = document.getElementById('aboutme').innerText;
        let inputVal = document.getElementsByTagName('input');
        inputVal[0].value = myName;
        inputVal[1].value = myAge;
        inputVal[2].value = myGender;
        inputVal[3].value = mySkills;
        inputVal[4].value = aboutMe;
    }

    const [myName, setMyName] = useState("ABC WXYZ")
    const [myAge, setMyAge] = useState("20")
    const [myGender, setMyGender] = useState("Male")
    const [mySkills, setMySkills] = useState("Music, Video Editing")
    const [myAbout, setMyAbout] = useState("Looking for collaborators who are willing to work together on a serious level")
    // const [myPicture, setMyPicture] = useState( <img src={profile} alt=""/>)

    const saveChanges = (e) =>{
        let inputVal = document.getElementsByTagName('input');
        setMyName(inputVal[0].value);
        setMyAge(inputVal[1].value);
        setMyGender(inputVal[2].value);
        setMySkills(inputVal[3].value);
        setMyAbout(inputVal[4].value);


        // Hiding afterEdit div and displaying beforeEdit div without making changes--------
        let beforeEdit = document.getElementsByClassName('beforeEdit')[0];
        let afterEdit = document.getElementsByClassName('afterEdit')[0];
        beforeEdit.style.display = "flex";
        afterEdit.style.display = "none";
    }

    const unsaveChanges = () =>{
        // Hiding afterEdit div and displaying beforeEdit div without making changes--------
        let beforeEdit = document.getElementsByClassName('beforeEdit')[0];
        let afterEdit = document.getElementsByClassName('afterEdit')[0];
        beforeEdit.style.display = "flex";
        afterEdit.style.display = "none";
    }


    return (
        <div style={myStyle}>
               <section className="showcase">

                    <div id="propage">
                        {/* <h1 className="primary center"><u>My Profile</u></h1> */}

                        <section className="bio">
                            <div className="beforeEdit center">
                                <div id="beforepic">
                                    <img src={profile} alt=""/>
                                    {/* <p className="center mt-3"><Link to="/editprofile"><i onClick={edittt} className="fas fa-user-edit">Edit Profile </i></Link></p> */}
                                    <p className="center mt-3"><i onClick={edittt} className="mx-2 fas fa-user-edit">Edit Profile</i></p>
                                    
                                </div>
                                
                                <div className="info">
                                    <p id="myName" className="secondary">{myName}</p>
                                    <p id="age">{myAge}</p>
                                    <p id="gender">{myGender}</p>
                                    <p id="skills">{mySkills}</p>
                                    <p id="aboutme" className="center">{myAbout}</p>
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
                                            <label htmlFor="text" className="ml-4 col-form-label">Name</label>
                                        </div>
                                        <div className="col-auto">
                                            <input id="nameInput" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div id="age" className="center mb-2">
                                    <div className="row g-2 align-items-center">
                                        <div className="col-auto">
                                            <label htmlFor="text" className="col-form-label">Age</label>
                                        </div>
                                        <div className="col-auto">
                                            <input id="ageInput" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div id="gender" className="center mb-2">
                                    <div className="row g-2 align-items-center">
                                        <div className="col-auto">
                                            <label htmlFor="text" className="col-form-label">Gender</label>
                                        </div>
                                        <div className="col-auto">
                                            <input id="genderInput" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div id="skills" className="center mb-2">
                                    <div className="row g-2 align-items-center">
                                        <div className="col-auto">
                                            <label htmlFor="text" className="col-form-label">My Skills</label>
                                        </div>
                                        <div className="col-auto">
                                            <input id="skillsInput" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div id="aboutme" className="center mb-2">
                                    <div className="row g-2 align-items-center">
                                        <div className="col-auto">
                                            <label htmlFor="text" className="col-form-label">About Me</label>
                                        </div>
                                        <div className="col-auto">
                                            <input id="aboutMeInput" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div id="buttons" className='mt-5 mb-3 d-flex justify-content-between'>
                                        <Link onClick={unsaveChanges} to="/myprofile" className="btn btn-dark"><i className="mx-1 fas fa-arrow-left"></i>Go Back</Link>
                                        <Link onClick={saveChanges} to="/myprofile" className="btn btn-dark">Save Changes</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </section>

                        <section id="widgets" className="center">
                            <a href="/a">
                                <div id="wid1">
                                    <img src={request} alt="requests"/>
                                    <p className="center tertiary">Connection Requests</p>
                                </div>
                            </a>

                            <Link to="/upload">
                                <div id="wid2">
                                    <img src={upload} alt="upload posts"/>
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
                                <li className="post" id="po1">POST 1</li>
                                <li className="post" id="po2">POST 2</li>
                                <li className="post" id="po3">POST 3</li>
                                <li className="post" id="po4">POST 4</li>
                            </ul>
                        </section> 
                    </div>
                </section>
            </div>
    )
}
