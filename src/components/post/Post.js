import React from "react";
import profile from "./profile.png";
import { Link } from "react-router-dom";
import "./home.css";
import ace from "./ace.png";
import diamond from "./diamonds.png";
import crown from "./crown.png";
import { useDispatch } from "react-redux";
import moment from "moment";
import { likePost, dislikePost, deletePost } from "../../actions/Posts";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbDownAltOutlined from "@material-ui/icons/ThumbDownAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Post(props) {
  const dispatch = useDispatch();
  // MORE PROPS TO BE ADDED: POST UPLOADER KA NAME, SKILL REALTED TO POST, IMAGE, CAPTION TEXT, UPLOADER KE CHAT AREA KA LINK
  let { post } = props;
  const user = JSON.parse(localStorage.getItem("profile"));
  // let { caption}= post;

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

  const Likes = () => {
    // console.log(post.likes)
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.result?._id) ? (
        <>
          <ThumbUpAltIcon fontSize="medium" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="medium" />
        &nbsp;Like
      </>
    );
  };

  const Dislikes = () => {
    if (post.dislikes.length > 0) {
      return post.dislikes.find((dislike) => dislike === user?.result?._id) ? (
        <>
          <ThumbDownAltIcon fontSize="medium" />
          &nbsp;
          {post.dislikes.length > 2
            ? `You and ${post.dislikes.length - 1} others`
            : `${post.dislikes.length} dislike${
                post.dislikes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbDownAltOutlined fontSize="medium" />
          &nbsp;{post.dislikes.length}{" "}
          {post.dislikes.length === 1 ? "Dislike" : "DisLikes"}
        </>
      );
    }
    return (
      <>
        <ThumbDownAltOutlined fontSize="small" />
        &nbsp;Dislike
      </>
    );
  };

  return (
    <div>
      <div className="itemsss col my-2">
        <div className="head d-flex justify-content-between">
          <div className="d-flex">
            <Link to="/thatProfile">
              <img src={profile} alt="" />
            </Link>
            <p className="card-text">
              {post.username}
              {/* {console.log(post.username)} */}
              <span className="mx-1 badge rounded-pill bg-warning text-dark my-2">
                {post.skills}
              </span>
            </p>
          </div>
          {/* <i
            onClick={savePost}
            className={`saveBtn ${saved} fa-bookmark align-items-center`}
          ></i> */}
          <DeleteIcon
            data-bs-toggle="modal"
            data-bs-target="#confirmDelModal"
            fontSize="medium"
            //  onClick={() => dispatch(deletePost(post._id))}
          />

          {user?.result?._id === post?.creator && (
            // <i
            //   id="iDelete"
            //   className="fas fa-trash mt-2"
            //   data-bs-toggle="modal"
            //   data-bs-target="#confirmDelModal"
            //   ></i>
            <div
              className="modal fade"
              id="confirmDelModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Confirm Deleting Post
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body d-flex justify-content-evenly light">
                    <h5 style={{ color: "#1a1c1d" }}>
                      Do you really want to delete this post?
                    </h5>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => dispatch(deletePost(post._id))}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="midContent">
          <img src={post.selectedFile} className="card-img-top mx-5" alt="" />
          <p className="card-text">
            {post.caption}

            <small className="text-muted text-end">
              {" "}
              {moment(post.createdAt).fromNow()}
            </small>
          </p>
        </div>
        <hr />
        <div className="reaction">
          <button
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
            className="btn"
            name="btnradio"
            id="btnradio1"
          >
            {/* <i className={`${like} fa-thumbs-up align-items-center mx-1`} */}
            {/* > */}
            {/* </i> */}
            {/* <ThumbUpAltIcon fontSize="medium" /> */}
            <Likes />
          </button>
          <button
            disabled={!user?.result}
            onClick={() => dispatch(dislikePost(post._id))}
            className="btn"
            name="btnradio"
            id="btnradio2"
          >
            {/* <i
              // className={`${dislike} fa-thumbs-down align-items-center mx-1`}
              className={`far fa-thumbs-down align-items-center mx-1`}
            ></i> */}
            {/* <ThumbDownAltIcon fontSize="medium" /> */}

            <Dislikes />
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
