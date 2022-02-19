import React, {useState} from 'react'
import './thatUpload.css'
import FileBase from 'react-file-base64';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/Posts';

export default function Upload() {
    const [postData, setPostData]=useState({
        caption: '', selectedFile: '', skills: ''
    })

    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch (createPost(postData));
    }

    const onChange=(e)=>{
        setPostData({ ...postData, [e.target.name]: e.target.value });
    }


    return (
    <form onSubmit={handleSubmit} id="main">
        {/* Share what you feel */}
        <div id="upHead" className='d-flex justify-content-between'>
            <Link to="/about"><i className="mx-2 fas fa-arrow-left"></i></Link>
            <h3>Create Ideas</h3>
            <button ><Link className="mx-1 fas fa-chevron-circle-up" to="/home"></Link>Upload</button>
            {/* <button ><i className="mx-1 fas fa-chevron-circle-up" ></i>Upload</button> */}
        </div>
        <div id="box">
            <div className="d-flex flex-row">
                <div id="uploadedImg">
                    <i className="center fas fa-plus-circle"></i>
                    {/* <i class="far fa-image"></i>
                    <i class="fas fa-video"></i> */}
                    <FileBase
                    type="file"
                    mulitple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                />
                    <p className='center' >Add image/ video</p>
                </div>
                <p id="caption">
                    <textarea className="form-control" placeholder="Share what you feel !!!" id="floatingTextarea"
                    name="caption"
                    value={postData.caption}
                    onChange={onChange}>

                    </textarea>

                </p>
            </div>
            {/* <div id="postSkill" className="center row g-2 align-items-center"> */}
            <div id="postSkill" className="mx-3 d-flex">
                <div className="">
                    <label htmlFor="text" className="my-3 col-form-label">Category</label>
                </div>
                <div className="">
                    <input name="skills" id="aboutMeInput" placeholder="Enter a Skill" type="text" className="my-3 mx-2 form-control" value={postData.skills} onChange={onChange}/>
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
    )
}
