import React from 'react'
import './categories.css'
import profile from './profile.png'
import { Link } from 'react-router-dom'


export default function profileInCategory(props) {

    let myStyle = {
        color: props.mode==='light'?'black':'white',                     // for toggleMode
        backgroundColor: props.mode==='light'?'white':'black'
    }
    let cardStyle = {
        color: props.mode==='light'?'black':'white',                     // for toggleMode
        backgroundColor: props.mode==='light'?'white':'#1a1c1d'
    }

    return (
        <div>
        <div className="container-sm" style={myStyle}>
            <Link to="/thatProfile">
                <div className='item d-flex my-4 d-flex justify-content-start'>
                {/* <div className='item d-flex my-4 mx-2'> */}
                    <img src={profile} className="img-fluid" alt="..."/>
                    <div className="cardProfile" style={cardStyle}>
                        <div className="row g-0">
                            <div className="card-body">
                                <div className="card-title"><b>Name LastName</b></div>
                                <h5 className="card-text text-muted">One Liner: Lorem ipsum dolor sit amet consect adipisicing elit.</h5>
                                <p id="detail" className="card-text d-flex justify-content-between">
                                    <small className="text-muted">7 Uploaded Posts</small>
                                    <small className="text-muted">Likes Recieved: 34k</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/thatProfile">
                <div className='item d-flex my-4 d-flex justify-content-end'>
                {/* <div className='item d-flex my-4 mx-2'> */}
                    <img src={profile} className="img-fluid" alt="..."/>
                    <div className="cardProfile" style={cardStyle}>
                        <div className="row g-0">
                            <div className="card-body">
                                <div className="card-title"><b>Name LastName</b></div>
                                <h5 className="card-text text-muted">One Liner: Lorem ipsum dolor sit amet consect adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore mollitia similique.</h5>
                                <p id="detail" className="card-text d-flex justify-content-between">
                                    <small className="text-muted">7 Uploaded Posts</small>
                                    <small className="text-muted">Likes Recieved: 34k</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/thatProfile">
                <div className='item d-flex my-4 d-flex justify-content-start'>
                {/* <div className='item d-flex my-4 mx-2'> */}
                    <img src={profile} className="img-fluid" alt="..."/>
                    <div className="cardProfile" style={cardStyle}>
                        <div className="row g-0">
                            <div className="card-body">
                                <div className="card-title"><b>Name LastName</b></div>
                                <h5 className="card-text text-muted">One Liner: Lorem ipsum dolor sit amet consect adipisicing elit.</h5>
                                <p id="detail" className="card-text d-flex justify-content-between">
                                    <small className="text-muted">7 Uploaded Posts</small>
                                    <small className="text-muted">Likes Recieved: 34k</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/thatProfile">
                <div className='item d-flex my-4 d-flex justify-content-end'>
                {/* <div className='item d-flex my-4 mx-2'> */}
                    <img src={profile} className="img-fluid" alt="..."/>
                    <div className="cardProfile" style={cardStyle}>
                        <div className="row g-0">
                            <div className="card-body">
                                <div className="card-title"><b>Name LastName</b></div>
                                <h5 className="card-text text-muted">One Liner: Lorem ipsum dolor sit amet consect adipisicing elit.</h5>
                                <p id="detail" className="card-text d-flex justify-content-between">
                                    <small className="text-muted">7 Uploaded Posts</small>
                                    <small className="text-muted">Likes Recieved: 34k</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        </div>
    )
}
