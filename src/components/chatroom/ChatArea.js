import React from 'react'
import './chat.css';
// import './chatAreaJS.js';
import { Link } from 'react-router-dom'
import matMaan from './unnamed.jpg'
import berries from './berries.jpg'



export default function ChatArea(props) {

    let myStyle = {                  // only else colors are getting applied

        // color: props.mode==='light'?'black':'#1a1c1d',             // for light mode
        // backgroundColor: props.mode==='light'?'white':'white'
        
        // color: props.mode==='light'?'black':'white',                  // for dark mode
        // backgroundColor: props.mode ==='light'?'white':'#1a1c1d' 

        color: props.mode==='light'?'#1a1c1d':'white',             // for toggleMode
        backgroundColor: props.mode==='light'?'white':'#1a1c1d'
    }

    let btnStyle = {
        color: props.mode==='light'?'white':'white',                // for light mode
        backgroundColor: props.mode==='light'?'#212529':'#212529' 
    }

    return (
        <div className="wrapper">
                <section className="chat-area" style={myStyle}>
                    <header>
                    {/* <?php 
                        $user_id = mysqli_real_escape_string($conn, $_GET['user_id']);
                        $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$user_id}");
                        if(mysqli_num_rows($sql) > 0){
                        $row = mysqli_fetch_assoc($sql);
                        }else{
                        header("location: users.php");
                        }
                    ?> */}
                    <Link to="/chatroom" className="back-icon" style={myStyle}><i className="fas fa-arrow-left"></i></Link>
                    {/* <img src="php/images/<?php echo $row['img']; ?>" alt=""/> */}
                    <img src={berries} alt=""/>
                    <div className="details my-1">
                        {/* <span><?php echo $row['fname']. " " . $row['lname'] ?></span>
                        <p><?php echo $row['status']; ?></p> */}
                        <span id="name">Chintu</span>
                        <p id="act2">Active Now</p>
                    </div>
                    </header>

                    <div className="chat-box">
                        <div className="chat incoming">
                            <img src={matMaan} alt=""/>
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corrupti dolore a.</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat incoming">
                            <img src={matMaan} alt=""/>
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corrupti dolore a.</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat incoming">
                            <img src={matMaan} alt=""/>
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corrupti dolore a.</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat incoming">
                            <img src={matMaan} alt=""/>
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corrupti dolore a.</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat incoming">
                            <img src={matMaan} alt=""/>
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corrupti dolore a.</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat outgoing">
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui minus ab. Eaque dolor debitis deserunt unde molestiae adipisci consectetur, dignissimos ex corrupti?</p>
                            </div>
                        </div>
                        <div className="chat incoming">
                            <img src={matMaan} alt=""/>
                            <div className="details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo corrupti dolore a.</p>
                            </div>
                        </div>
                    </div>
                    <form action="/" className="typing-area">
                    {/* <input type="text" className="incoming_id" name="incoming_id" value="<?php echo $user_id; ?>" hidden> */}
                    <input type="text" style={myStyle} name="message" className="input-field" placeholder="Type a message here..." autoComplete="off"/>
                    <button style={btnStyle}><i className="fab fa-telegram-plane"></i></button>
                    </form>
                </section>
                
        </div>
        
    )
}