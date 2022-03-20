import React from "react";
import { useState } from "react";
// import profile from './profile.png'
// import image from './close.png'
import matMaan from "./unnamed.jpg";
import { Link } from "react-router-dom";
import './home.css'
import Post from '../post/Post'
import { useSelector } from 'react-redux';

export const Home = ( props, {post}) => {
    const posts = useSelector((state) => state.posts);
    // console.log(posts)
    // const {
    //     caption, skills, selectedFile
    // } = posts
    //  console.log(skills)

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [sortSkill, setSortSkill]= useState("Skills")

  let myStyle = {
    color: props.mode === "light" ? "black" : "white", // for toggleMode
    backgroundColor: props.mode === "light" ? "white" : "#1a1c1d",
  };

  const allSkills = () =>{
    let post = document.getElementsByClassName('itemsss');

    Array.from(post).forEach(function(element){
        element.style.display = 'block';
    })
    setSortSkill("All")
}
const sortSk = () =>{     
    let post = document.getElementsByClassName('itemsss');
    let search = document.getElementById('skillSearch')
    let inputVal = search.value.toLowerCase();
    
    Array.from(post).forEach(function(element){
        let badgeTxt = element.getElementsByTagName("span")[0].innerText.toLowerCase();   // gets every element of span, starting from index 0
        // if(badgeTxt.includes(inputVal) || inputVal.includes(badgeTxt) || badgeTxt === inputVal) {
        if(badgeTxt.includes(inputVal) || badgeTxt === inputVal) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";                    
            let t = document.createTextNode("");                      // Create a text node
            document.getElementById("noPost").appendChild(t);             // Append <p> to <div> with id="myDIV"
        }
    })
    setSortSkill(capitalizeFirstLetter(inputVal))
}

return (
    <div>

    {/* Recommended------------------------------------------------------------------------------------------ */}
        <div className="container-sm">
            <h4 className="recomm mx-3">Recommended</h4>
            <div className="horiBoxScroll mx-3">
                <div className="item">
                <Link className="card w-100" to="/skillform" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                <div className="item">
                <Link className="card w-100" to="/thatProfile" style={myStyle}>
                    {/* <img src={!imgurl ? "https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg" : imgurl} alt="" /> */}
                    <img src={matMaan} alt="" />

                    <div className="card-body">
                        <span className="badge rounded-pill bg-info text-dark my-2">Skill, Skills</span>
                        {/* <h5 className="card-title">{title}...</h5> */}
                        <h5 className="card-title">Name, 23</h5>
                        <p className="card-text"><small className="text-muted">One Liner: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit.</small></p>
                        {/* <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </Link>
                </div>
                
            </div>
        </div>


    {/* Menu Bar--------------------------------------------------------------------------------------------- */}
        <div className="container-sm my-5">
        <div className="menuBar d-flex justify-content-evenly mb-3" style={props.menuStyle}>

                {/* <div id="countrySORT" className="dropdown">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                    </button>
                    <ul id="country" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item">WorldWide</button></li>
                        <li><button className="dropdown-item"><b>A</b></button></li>
                        <li><button className="dropdown-item">Afghanistan</button></li>
                        <li><button className="dropdown-item">Albania</button></li>
                        <li><button className="dropdown-item">Algeria</button></li>
                        <li><button className="dropdown-item">Andorra</button></li>
                        <li><button className="dropdown-item">Angola</button></li>
                        <li><button className="dropdown-item">Antigua and Barbuda</button></li>
                        <li><button className="dropdown-item">Argentina</button></li>
                        <li><button className="dropdown-item">Armenia</button></li>
                        <li><button className="dropdown-item">Australia</button></li>
                        <li><button className="dropdown-item">Austria</button></li>
                        <li><button className="dropdown-item">Austrian Empire*</button></li>
                        <li><button className="dropdown-item">Azerbaijan</button></li>
                        <li><button className="dropdown-item"><b>B</b></button></li>
                        <li><button className="dropdown-item">Baden*</button></li>
                        <li><button className="dropdown-item">Bahamas, The</button></li>
                        <li><button className="dropdown-item">Bahrain</button></li>
                        <li><button className="dropdown-item">Bangladesh</button></li>
                        <li><button className="dropdown-item">Barbados</button></li>
                        <li><button className="dropdown-item">Bavaria*</button></li>
                        <li><button className="dropdown-item">Belarus</button></li>
                        <li><button className="dropdown-item">Belgium</button></li>
                        <li><button className="dropdown-item">Belize</button></li>
                        <li><button className="dropdown-item">Benin (Dahomey)</button></li>
                        <li><button className="dropdown-item">Bolivia</button></li>
                        <li><button className="dropdown-item">Bosnia and Herzegovina</button></li>
                        <li><button className="dropdown-item">Botswana</button></li>
                        <li><button className="dropdown-item">Brazil</button></li>
                        <li><button className="dropdown-item">Brunei</button></li>
                        <li><button className="dropdown-item">Brunswick and Lüneburg</button></li>
                        <li><button className="dropdown-item">Bulgaria</button></li>
                        <li><button className="dropdown-item">Burkina Faso (Upper Volta)</button></li>
                        <li><button className="dropdown-item">Burma</button></li>
                        <li><button className="dropdown-item">Burundi</button></li>
                        <li><button className="dropdown-item"><b>C</b></button></li>
                        <li><button className="dropdown-item">Cabo Verde</button></li>
                        <li><button className="dropdown-item">Cambodia</button></li>
                        <li><button className="dropdown-item">Cameroon</button></li>
                        <li><button className="dropdown-item">Canada</button></li>
                        <li><button className="dropdown-item">Cayman Islands, The</button></li>
                        <li><button className="dropdown-item">Central African Republic</button></li>
                        <li><button className="dropdown-item">Central American Federation*</button></li>
                        <li><button className="dropdown-item">Chad</button></li>
                        <li><button className="dropdown-item">Chile</button></li>
                        <li><button className="dropdown-item">China</button></li>
                        <li><button className="dropdown-item">Colombia</button></li>
                        <li><button className="dropdown-item">Comoros</button></li>
                        <li><button className="dropdown-item">Congo Free State, The</button></li>
                        <li><button className="dropdown-item">Costa Rica</button></li>
                        <li><button className="dropdown-item">Cote d'Ivoire (Ivory Coast)</button></li>
                        <li><button className="dropdown-item">Croatia</button></li>
                        <li><button className="dropdown-item">Cuba</button></li>
                        <li><button className="dropdown-item">Cyprus</button></li>
                        <li><button className="dropdown-item">Czechia</button></li>
                        <li><button className="dropdown-item">Czechoslovakia</button></li>
                        <li><button className="dropdown-item"><b>D</b></button></li>
                        <li><button className="dropdown-item">Democratic Republic of the Congo</button></li>
                        <li><button className="dropdown-item">Denmark</button></li>
                        <li><button className="dropdown-item">Djibouti</button></li>
                        <li><button className="dropdown-item">Dominica</button></li>
                        <li><button className="dropdown-item">Dominican Republic</button></li>
                        <li><button className="dropdown-item">Duchy of Parma, The*</button></li>
                        <li><button className="dropdown-item"><b>E</b></button></li>
                        <li><button className="dropdown-item">German Democratic Republic</button></li>
                        <li><button className="dropdown-item">Ecuador</button></li>
                        <li><button className="dropdown-item">Egypt</button></li>
                        <li><button className="dropdown-item">El Salvador</button></li>
                        <li><button className="dropdown-item">Equatorial Guinea</button></li>
                        <li><button className="dropdown-item">Eritrea</button></li>
                        <li><button className="dropdown-item">Estonia</button></li>
                        <li><button className="dropdown-item">Eswatini</button></li>
                        <li><button className="dropdown-item">Ethiopia</button></li>
                        <li><button className="dropdown-item"><b>F</b></button></li>
                        <li><button className="dropdown-item">Federal Government of Germany</button></li>
                        <li><button className="dropdown-item">Fiji</button></li>
                        <li><button className="dropdown-item">Finland</button></li>
                        <li><button className="dropdown-item">France</button></li>
                        <li><button className="dropdown-item"><b>G</b></button></li>
                        <li><button className="dropdown-item">Gabon</button></li>
                        <li><button className="dropdown-item">Gambia, The</button></li>
                        <li><button className="dropdown-item">Georgia</button></li>
                        <li><button className="dropdown-item">Germany</button></li>
                        <li><button className="dropdown-item">Ghana</button></li>
                        <li><button className="dropdown-item">Grand Duchy of Tuscany</button></li>
                        <li><button className="dropdown-item">Greece</button></li>
                        <li><button className="dropdown-item">Grenada</button></li>
                        <li><button className="dropdown-item">Guatemala</button></li>
                        <li><button className="dropdown-item">Guinea</button></li>
                        <li><button className="dropdown-item">Guinea-Bissau</button></li>
                        <li><button className="dropdown-item">Guyana</button></li>
                        <li><button className="dropdown-item"><b>H</b></button></li>
                        <li><button className="dropdown-item">Haiti</button></li>
                        <li><button className="dropdown-item">Hanover*</button></li>
                        <li><button className="dropdown-item">Hanseatic Republics*</button></li>
                        <li><button className="dropdown-item">Hawaii*</button></li>
                        <li><button className="dropdown-item">Hesse*</button></li>
                        <li><button className="dropdown-item">Holy See</button></li>
                        <li><button className="dropdown-item">Honduras</button></li>
                        <li><button className="dropdown-item">Hungary</button></li>
                        <li><button className="dropdown-item"><b>I</b></button></li>
                        <li><button className="dropdown-item">Iceland</button></li>
                        <li><button className="dropdown-item">India</button></li>
                        <li><button className="dropdown-item">Indonesia</button></li>
                        <li><button className="dropdown-item">Iran</button></li>
                        <li><button className="dropdown-item">Iraq</button></li>
                        <li><button className="dropdown-item">Ireland</button></li>
                        <li><button className="dropdown-item">Israel</button></li>
                        <li><button className="dropdown-item">Italy</button></li>
                        <li><button className="dropdown-item"><b>J</b></button></li>
                        <li><button className="dropdown-item">Jamaica</button></li>
                        <li><button className="dropdown-item">Japan</button></li>
                        <li><button className="dropdown-item">Jordan</button></li>
                        <li><button className="dropdown-item"><b>K</b></button></li>
                        <li><button className="dropdown-item">Kazakhstan</button></li>
                        <li><button className="dropdown-item">Kenya</button></li>
                        <li><button className="dropdown-item">Kingdom of Serbia/Yugoslavia*</button></li>
                        <li><button className="dropdown-item">Kiribati</button></li>
                        <li><button className="dropdown-item">Korea</button></li>
                        <li><button className="dropdown-item">Kosovo</button></li>
                        <li><button className="dropdown-item">Kuwait</button></li>
                        <li><button className="dropdown-item">Kyrgyzstan</button></li>
                        <li><button className="dropdown-item"><b>L</b></button></li>
                        <li><button className="dropdown-item">Laos</button></li>
                        <li><button className="dropdown-item">Latvia</button></li>
                        <li><button className="dropdown-item">Lebanon</button></li>
                        <li><button className="dropdown-item">Lesotho</button></li>
                        <li><button className="dropdown-item">Lew Chew (Loochoo)*</button></li>
                        <li><button className="dropdown-item">Liberia</button></li>
                        <li><button className="dropdown-item">Libya</button></li>
                        <li><button className="dropdown-item">Liechtenstein</button></li>
                        <li><button className="dropdown-item">Lithuania</button></li>
                        <li><button className="dropdown-item">Luxembourg</button></li>
                        <li><button className="dropdown-item"><b>M</b></button></li>
                        <li><button className="dropdown-item">Madagascar</button></li>
                        <li><button className="dropdown-item">Malawi</button></li>
                        <li><button className="dropdown-item">Malaysia</button></li>
                        <li><button className="dropdown-item">Maldives</button></li>
                        <li><button className="dropdown-item">Mali</button></li>
                        <li><button className="dropdown-item">Malta</button></li>
                        <li><button className="dropdown-item">Marshall Islands</button></li>
                        <li><button className="dropdown-item">Mauritania</button></li>
                        <li><button className="dropdown-item">Mauritius</button></li>
                        <li><button className="dropdown-item">Mecklenburg-Schwerin*</button></li>
                        <li><button className="dropdown-item">Mecklenburg-Strelitz*</button></li>
                        <li><button className="dropdown-item">Mexico</button></li>
                        <li><button className="dropdown-item">Micronesia</button></li>
                        <li><button className="dropdown-item">Moldova</button></li>
                        <li><button className="dropdown-item">Monaco</button></li>
                        <li><button className="dropdown-item">Mongolia</button></li>
                        <li><button className="dropdown-item">Montenegro</button></li>
                        <li><button className="dropdown-item">Morocco</button></li>
                        <li><button className="dropdown-item">Mozambique</button></li>
                        <li><button className="dropdown-item"><b>N</b></button></li>
                        <li><button className="dropdown-item">Namibia</button></li>
                        <li><button className="dropdown-item">Nassau*</button></li>
                        <li><button className="dropdown-item">Nauru</button></li>
                        <li><button className="dropdown-item">Nepal</button></li>
                        <li><button className="dropdown-item">Netherlands, The</button></li>
                        <li><button className="dropdown-item">New Zealand</button></li>
                        <li><button className="dropdown-item">Nicaragua</button></li>
                        <li><button className="dropdown-item">Niger</button></li>
                        <li><button className="dropdown-item">Nigeria</button></li>
                        <li><button className="dropdown-item">North German Confederation*</button></li>
                        <li><button className="dropdown-item">North German Union*</button></li>
                        <li><button className="dropdown-item">North Macedonia</button></li>
                        <li><button className="dropdown-item">Norway</button></li>
                        <li><button className="dropdown-item"><b>O</b></button></li>
                        <li><button className="dropdown-item">Oldenburg*</button></li>
                        <li><button className="dropdown-item">Oman</button></li>
                        <li><button className="dropdown-item">Orange Free State*</button></li>
                        <li><button className="dropdown-item"><b>P</b></button></li>
                        <li><button className="dropdown-item">Pakistan</button></li>
                        <li><button className="dropdown-item">Palau</button></li>
                        <li><button className="dropdown-item">Panama</button></li>
                        <li><button className="dropdown-item">Papal States*</button></li>
                        <li><button className="dropdown-item">Papua New Guinea</button></li>
                        <li><button className="dropdown-item">Paraguay</button></li>
                        <li><button className="dropdown-item">Peru</button></li>
                        <li><button className="dropdown-item">Philippines</button></li>
                        <li><button className="dropdown-item">Piedmont-Sardinia*</button></li>
                        <li><button className="dropdown-item">Poland</button></li>
                        <li><button className="dropdown-item">Portugal</button></li>
                        <li><button className="dropdown-item"><b>Q</b></button></li>
                        <li><button className="dropdown-item">Qatar</button></li>
                        <li><button className="dropdown-item"><b>R</b></button></li>
                        <li><button className="dropdown-item">Republic of Genoa*</button></li>
                        <li><button className="dropdown-item">Republic of Korea (South Korea)</button></li>
                        <li><button className="dropdown-item">Republic of the Congo</button></li>
                        <li><button className="dropdown-item">Romania</button></li>
                        <li><button className="dropdown-item">Russia</button></li>
                        <li><button className="dropdown-item">Rwanda</button></li>
                        <li><button className="dropdown-item"><b>S</b></button></li>
                        <li><button className="dropdown-item">Saint Kitts and Nevis</button></li>
                        <li><button className="dropdown-item">Saint Lucia</button></li>
                        <li><button className="dropdown-item">Saint Vincent and the Grenadines</button></li>
                        <li><button className="dropdown-item">Samoa</button></li>
                        <li><button className="dropdown-item">San Marino</button></li>
                        <li><button className="dropdown-item">Sao Tome and Principe</button></li>
                        <li><button className="dropdown-item">Saudi Arabia</button></li>
                        <li><button className="dropdown-item">Schaumburg-Lippe*</button></li>
                        <li><button className="dropdown-item">Senegal</button></li>
                        <li><button className="dropdown-item">Serbia</button></li>
                        <li><button className="dropdown-item">Seychelles</button></li>
                        <li><button className="dropdown-item">Sierra Leone</button></li>
                        <li><button className="dropdown-item">Singapore</button></li>
                        <li><button className="dropdown-item">Slovakia</button></li>
                        <li><button className="dropdown-item">Slovenia</button></li>
                        <li><button className="dropdown-item">Solomon Islands, The</button></li>
                        <li><button className="dropdown-item">Somalia</button></li>
                        <li><button className="dropdown-item">South Africa</button></li>
                        <li><button className="dropdown-item">South Sudan</button></li>
                        <li><button className="dropdown-item">Spain</button></li>
                        <li><button className="dropdown-item">Sri Lanka</button></li>
                        <li><button className="dropdown-item">Sudan</button></li>
                        <li><button className="dropdown-item">Suriname</button></li>
                        <li><button className="dropdown-item">Sweden</button></li>
                        <li><button className="dropdown-item">Switzerland</button></li>
                        <li><button className="dropdown-item">Syria</button></li>
                        <li><button className="dropdown-item"><b>T</b></button></li>
                        <li><button className="dropdown-item">Tajikistan</button></li>
                        <li><button className="dropdown-item">Tanzania</button></li>
                        <li><button className="dropdown-item">Texas*</button></li>
                        <li><button className="dropdown-item">Thailand</button></li>
                        <li><button className="dropdown-item">Timor-Leste</button></li>
                        <li><button className="dropdown-item">Togo</button></li>
                        <li><button className="dropdown-item">Tonga</button></li>
                        <li><button className="dropdown-item">Trinidad and Tobago</button></li>
                        <li><button className="dropdown-item">Tunisia</button></li>
                        <li><button className="dropdown-item">Turkey</button></li>
                        <li><button className="dropdown-item">Turkmenistan</button></li>
                        <li><button className="dropdown-item">Tuvalu</button></li>
                        <li><button className="dropdown-item">Two Sicilies*</button></li>
                        <li><button className="dropdown-item"><b>U</b></button></li>
                        <li><button className="dropdown-item">Uganda</button></li>
                        <li><button className="dropdown-item">Ukraine</button></li>
                        <li><button className="dropdown-item">Union of Soviet Socialist Republics*</button></li>
                        <li><button className="dropdown-item">United Arab Emirates, The</button></li>
                        <li><button className="dropdown-item">United Kingdom, The</button></li>
                        <li><button className="dropdown-item">Uruguay</button></li>
                        <li><button className="dropdown-item">Uzbekistan</button></li>
                        <li><button className="dropdown-item"><b>V</b></button></li>
                        <li><button className="dropdown-item">Vanuatu</button></li>
                        <li><button className="dropdown-item">Venezuela</button></li>
                        <li><button className="dropdown-item">Vietnam</button></li>
                        <li><button className="dropdown-item"><b>W</b></button></li>
                        <li><button className="dropdown-item">Württemberg*</button></li>
                        <li><button className="dropdown-item"><b>Y</b></button></li>
                        <li><button className="dropdown-item">Yemen</button></li>
                        <li><button className="dropdown-item"><b>Z</b></button></li>
                        <li><button className="dropdown-item">Zambia</button></li>
                        <li><button className="dropdown-item">Zimbabwe</button></li>
                    </ul>
                </div> */}

                <div id="skillSORT" className="dropdown">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {sortSkill}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button onClick={allSkills} id="allSkills" className="dropdown-item">All</button></li>
                        <form className="d-flex">
                            <input id="skillSearch" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <i onClick={sortSk} className="fas fa-search align-items-center"></i>
                            {/* <button id="skillSearch" className="btn-outline-success" type="submit"><i className="fas fa-search align-items-center"></i></button> */}
                        </form>
                    </ul>
                </div>

                <div id="timeSORT" className="dropdown">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Most Liked
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item">Today</button></li>
                        <li><button className="dropdown-item">This Week</button></li>
                        <li><button className="dropdown-item">This Month</button></li>
                        <li><button className="dropdown-item">This Year</button></li>
                        <li><button className="dropdown-item">All Time</button></li>
                    </ul>
                </div>
            </div>
        </div>


    {/* Feed------------------------------------------------------------------------------------------------- */}
        <div className="container-sm my-5">
        {posts?.map((post) => (

                 <Post  key={post._id} post={post} />
                

                 ))}
        </div>        
        </div>        

)
}



