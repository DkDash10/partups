import React from 'react'
import './chat.css';
import { Link } from 'react-router-dom'
// import ChatArea from './ChatArea';
import matMaan from './unnamed.jpg'

export default function ChatRoom(props) {

    let myStyle = {
        color: props.mode==='light'?'black':'white',                     // for toggleMode
        backgroundColor: props.mode==='light'?'white':'#1a1c1d'      
        // backgroundColor: props.mode==='light'?'white':'#2f3031'     // backup chat body color   
    }
    let btnStyle = {
        color: props.mode==='light'?'black':'white',                // for toggle mode
        // backgroundColor: props.mode==='light'?'white':'#212529' 
    }

    const searchChat = (e) =>{
        e.preventDefault();
        let chat = document.getElementsByClassName('content');
        let search = document.getElementById('search');
        let searchVal = search.value.toLowerCase();
        
        Array.from(chat).forEach(function(elmnt){
            let name = elmnt.getElementsByClassName("chatName")[0].innerText.toLowerCase();
            console.log(name)
            console.log(searchVal)
            if(name === searchVal || name.includes(searchVal)){
                elmnt.style.display = "flex";
            }
            else{
                elmnt.style.display = "none";
            }
        })
    }


    return (
        <div className="wrapper" style={myStyle}>
                <div className="users">
                {/* <div className="users"> */}
                        {/* <header>
                        <div className="content">
                            <img src="berries.jpg" alt=""/>
                            <div className="details">
                            <span>Chintu</span>
                            <p>Active Now</p>
                            </div>
                        </div>
                        <a href="logout.html" className="logout">Logout</a>
                        </header> */}
                        {/* <div className="search">
                            <span className="text">Select a user to start chat</span>
                            <input type="text" placeholder="Enter name to search..."/>
                            <button style={myStyle}><i className="fas fa-search"></i></button>
                        </div> */}

                        <form className="d-flex my-2">
                            <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button style={btnStyle} onClick={searchChat} className="btn" type="submit">Search</button>
                        </form>


                        <div className="users-list">
                            <Link to="/chatarea">
                                <div className="content">
                                    <img src={matMaan} alt=""/>
                                    <div className="details">
                                        <span className="chatName" style={myStyle}>Bunty</span>
                                        <p style={{myStyle}}>This is a test message</p>
                                    </div>
                                    {/* <div className="status-dot"><i className="fas fa-circle"></i></div> */}
                                </div>
                            </Link>
                            <a href="/">
                                <div className="content">
                                    <img src={matMaan} alt=""/>
                                    <div className="details">
                                        <span className="chatName">Babli</span>
                                        <p>This is a test message</p> 
                                    </div>
                                    {/* <div className="status-dot"><i className="fas fa-circle"></i></div> */}
                                </div>
                            </a>
                            <a href="/">
                                <div className="content">
                                    <img src={matMaan} alt=""/>
                                    <div className="details">
                                        <span className="chatName">Bun</span>
                                        <p>This is a test message</p> 
                                    </div>
                                    {/* <div className="status-dot"><i className="fas fa-circle"></i></div> */}
                                </div>
                            </a>
                    </div>
                </div>        
            </div>
    )
}

