import React, { useState, useEffect } from "react";
import "./thatUpload.css";
import FileBase from "react-file-base64";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/Posts";
import { useHistory } from 'react-router-dom';

export default function Upload({currentId, setCurrentId}) {

  
  const [postData, setPostData] = useState({
    caption: "",
    selectedFile: "",
    skills: "",
  });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((caption) => caption._id === currentId) : null));
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createPost(postData));
    // console.log(postData)
    if (currentId === 0) {
      dispatch(createPost({ ...postData, username: user?.result?.username }, history));
      clear();
    } 
  };

  const onChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({  caption: '', skills: '', selectedFile: '' });
  };


 
  // else {
  //  dispatch(createPost(currentId, {...postData, name: user?.result?.name}))
  //   // console.log(currentId)
  //   clear();
  // }


  return (
    <form onSubmit={handleSubmit}  id="main">
      {/* Share what you feel */}
      <div id="upHead" className="d-flex justify-content-between">
        <Link to="/about">
          <i className="mx-2 fas fa-arrow-left"></i>
        </Link>
        <h3>Create Ideas</h3>
        <button>
          <Link className="mx-1 fas fa-chevron-circle-up" to="/home">
          </Link>
          Upload
        </button>
        {/* <button ><i className="mx-1 fas fa-chevron-circle-up" ></i>Upload</button> */}
      </div>
      <div id="box">
        <div className="d-flex flex-row">
          <div id="uploadedImg">
            <label htmlFor="file" style={{ color: "black" }}>
              <i className="center fas fa-plus-circle"> </i>
              <p className="center">Add image/ video</p>
            </label>
            <FileBase
              type="file"
              mulitple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            >
              {/* <label htmlFor="file" /> */}
            </FileBase>
          </div>
          <p id="caption">
            <textarea
              className="form-control"
              placeholder="Share what you feel !!!"
              id="floatingTextarea"
              name="caption"
              value={postData.caption}
              onChange={onChange}
            ></textarea>
          </p>
        </div>
        {/* <div id="postSkill" className="center row g-2 align-items-center"> */}
        <div id="postSkill" className="mx-3 d-flex">
          <div className="">
            <label htmlFor="text" className="my-3 col-form-label">
              Category
            </label>
          </div>
          <div className="">
            <input
              name="skills"
              id="aboutMeInput"
              placeholder="Enter a Skill"
              type="text"
              className="my-3 mx-2 form-control"
              value={postData.skills}
              onChange={onChange}
            />
          </div>
        </div>
        {/* <div className='fileInput'>
                <FileBase
                    type="file"
                    mulitple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                />

            </div> */}
      </div>
    </form>
  );
}
