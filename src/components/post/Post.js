import React from "react";
// import { useState } from 'react'
import profile from "./profile.png";
// import matMaan from './unnamed.jpg'
import { Link } from "react-router-dom";
import "./home.css";
// import image from "./close.png";
import ace from "./ace.png";
import diamond from "./diamonds.png";
import crown from "./crown.png";
// import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function Post(props, {post}) {

  // const dispatch = useDispatch();
  // MORE PROPS TO BE ADDED: POST UPLOADER KA NAME, SKILL REALTED TO POST, IMAGE, CAPTION TEXT, UPLOADER KE CHAT AREA KA LINK
  let { like, dislike, saved, upvote, downvote, savePost } = props;

  // let myStyle = {
  //     color: props.mode==='light'?'black':'white',                     // for toggleMode
  //     backgroundColor: props.mode==='light'?'white':'#1a1c1d'
  // }

  const aceClicked = () => {
    let ace = document.getElementById("rAce");
    let diamond = document.getElementById("rDiamond");
    let crown = document.getElementById("rCrown");
    let awesome = document.getElementById("rAwesome");

    ace.classList.add("activeReward");
    diamond.classList.remove("activeReward");
    crown.classList.remove("activeReward");
    awesome.classList.remove("activeReward");
  };
  const diamondClicked = () => {
    let ace = document.getElementById("rAce");
    let diamond = document.getElementById("rDiamond");
    let crown = document.getElementById("rCrown");
    let awesome = document.getElementById("rAwesome");

    ace.classList.remove("activeReward");
    diamond.classList.add("activeReward");
    crown.classList.remove("activeReward");
    awesome.classList.remove("activeReward");
  };
  const crownClicked = () => {
    let ace = document.getElementById("rAce");
    let diamond = document.getElementById("rDiamond");
    let crown = document.getElementById("rCrown");
    let awesome = document.getElementById("rAwesome");

    ace.classList.remove("activeReward");
    diamond.classList.remove("activeReward");
    crown.classList.add("activeReward");
    awesome.classList.remove("activeReward");
  };
  const awesomeClicked = () => {
    let ace = document.getElementById("rAce");
    let diamond = document.getElementById("rDiamond");
    let crown = document.getElementById("rCrown");
    let awesome = document.getElementById("rAwesome");

    ace.classList.remove("activeReward");
    diamond.classList.remove("activeReward");
    crown.classList.remove("activeReward");
    awesome.classList.add("activeReward");
  };

  return (
    <div>
      <div className="itemsss col my-2">
        <div className="head">
          <Link to="/thatProfile">
            <img src={profile} alt="" />
          </Link>
          <p className="card-text">
            Name LastName
            <span className="mx-1 badge rounded-pill bg-warning text-dark my-2">
              Music
            </span>
          </p>
          <i
            onClick={savePost}
            className={`saveBtn ${saved} fa-bookmark align-items-center`}
          ></i>
        </div>
        <div className="midContent">
          <img src={post.selectedFile } className="card-img-top mx-5" alt="..." />
          <p className="card-text">
            {post.message}
            <small className="text-muted text-end">
              {" "}
              {moment(post.createdAt).fromNow()} 
            </small>
          </p>
        </div>
        <hr />
        <div className="reaction">
          <button
            onClick={upvote}
            className="btn"
            name="btnradio"
            id="btnradio1"
          >
            <i className={`${like} fa-thumbs-up align-items-center mx-1`}></i>4
          </button>
          <button
            onClick={downvote}
            className="btn"
            name="btnradio"
            id="btnradio2"
          >
            <i
              className={`${dislike} fa-thumbs-down align-items-center mx-1`}
            ></i>
            69
          </button>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#rewardModal"
          >
            <i className="fas fa-gift align-items-center"></i>
          </button>
          <div
            className="modal fade"
            id="rewardModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Appreciate with Awards
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex justify-content-evenly">
                  <div
                    id="rAce"
                    onClick={aceClicked}
                    className="rewardItem d-flex flex-column"
                    type="checkbox"
                  >
                    <img src={ace} alt="" />
                    <p className="center">Ace</p>
                  </div>
                  <div
                    id="rDiamond"
                    onClick={diamondClicked}
                    className="rewardItem d-flex flex-column"
                  >
                    <img src={diamond} alt="" />
                    <p className="center">Diamond</p>
                  </div>
                  <div
                    id="rCrown"
                    onClick={crownClicked}
                    className="rewardItem d-flex flex-column"
                  >
                    <img src={crown} alt="" />
                    <p className="center">Crown</p>
                  </div>
                  <div
                    id="rAwesome"
                    onClick={awesomeClicked}
                    className="rewardItem d-flex flex-column"
                  >
                    <img src={ace} alt="" />
                    <p className="center">Awesome</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn">
                    Gift
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btn">
            <i className="fab fa-telegram-plane align-items-center"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import profile from './profile.png'
// import image from './close.png'
// import moment from 'moment';

// const Post = (props, {post}) => {

//   return (
//     <div>

//     <div className="itemsss col my-2">
//       <div className="head">
//         <Link to="/thatProfile">
//           <img src={profile} alt="" />
//         </Link>
//         <p className="card-text">
//           {/* {post.creator} */}
//           Name
//           <span className="badge rounded-pill bg-warning text-dark my-2">
//             Music
//           </span>
//         </p>
//         <i
//           onClick={props.savePost}
//           className={`saveBtn ${props.saved} fa-bookmark align-items-center`}
//         ></i>
//         {/* <button className="saveBtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.834 9.686l-4.166.575 3.032 2.914-.74 4.139 3.708-1.982 3.708 1.983-.74-4.139 3.032-2.915-4.166-.575-1.834-3.784-1.834 3.784z"/></svg></button> */}
//       </div>
//       <div className="midContent">
//         <img src={image} className="card-img-top mx-5" alt="..." />
//         <p className="card-text">
//         {/* {post.caption} */}
//         caption
//           {/* <small className="text-muted text-end">{moment(post.createdAt).fromNow()}</small> */}
//           <small className="text-muted text-end">Date</small>
//         </p>
//       </div>
//       <hr />
//       <div className="reaction">
//         <button
//           onClick={props.upvote}
//           className="btn"
//           name="btnradio"
//           id="btnradio1"
//         >
//           <i className={`${props.like} fa-thumbs-up align-items-center`}></i>
//         </button>
//         <button
//           onClick={props.downvote}
//           className="btn"
//           name="btnradio"
//           id="btnradio2"
//         >
//           <i
//             className={`${props.dislike} fa-thumbs-down align-items-center`}
//           ></i>
//         </button>
//         <button className="btn">
//           <i className="fas fa-share-alt align-items-center"></i>
//         </button>
//         <button className="btn">
//           <i className="fab fa-telegram-plane align-items-center"></i>
//         </button>
//       </div>
//     </div>
//     </div>

//   );
// };

// export default Post;
