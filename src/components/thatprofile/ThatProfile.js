import React from 'react'
import './thatUpload.css'
import profile from './profile.png'

export default function ThatProfile(props) {

    let myStyle = {
        color: props.mode==='light'?'black':'white',                     // for toggleMode
        backgroundColor: props.mode==='light'?'white':'#1a1c1d'      
        // backgroundColor: props.mode==='light'?'white':'#2f3031'     // backup chat body color   
    }

    return (
        <div style={myStyle}>
               <section className="showcase">

                    <div id="propage">
                        {/* <h1 className="primary center"><u>My Profile</u></h1> */}

                        <section className="bio center">
                            <div id="beforepic">
                                <img src={profile} alt=""/>
                            </div>
                            
                            <div className="info">
                                <p id="myName" className="secondary">Name</p>
                                <p id="age">Age</p>
                                <p id="gender">Gender</p>
                                <p id="skills">Skill1, Skill2</p>
                                <p id="aboutme" className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, provident itaque earum quasi harum illo!</p>
                            </div>
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
