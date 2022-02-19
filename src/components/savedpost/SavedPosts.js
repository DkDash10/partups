import React from 'react'
import profile from './profile.png'
import image from './close.png'
import './home.css'

export default function SavedPosts(props) {
    return (
        <div>
            {/* Menu Bar--------------------------------------------------------------------------------------------- */}
            <div className="container-sm my-5">
                <div className="menuBar mb-3" style={props.menuStyle}>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Country
                        </button>
                        <ul id="country" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">A</a></li>
                            <li><a className="dropdown-item" href="/">Afghanistan</a></li>
                            <li><a className="dropdown-item" href="/">Albania</a></li>
                            <li><a className="dropdown-item" href="/">Algeria</a></li>
                            <li><a className="dropdown-item" href="/">Andorra</a></li>
                            <li><a className="dropdown-item" href="/">Angola</a></li>
                            <li><a className="dropdown-item" href="/">Antigua and Barbuda</a></li>
                            <li><a className="dropdown-item" href="/">Argentina</a></li>
                            <li><a className="dropdown-item" href="/">Armenia</a></li>
                            <li><a className="dropdown-item" href="/">Australia</a></li>
                            <li><a className="dropdown-item" href="/">Austria</a></li>
                            <li><a className="dropdown-item" href="/">Austrian Empire*</a></li>
                            <li><a className="dropdown-item" href="/">Azerbaijan</a></li>
                            <li><a className="dropdown-item" href="/"><b>B</b></a></li>
                            <li><a className="dropdown-item" href="/">Baden*</a></li>
                            <li><a className="dropdown-item" href="/">Bahamas, The</a></li>
                            <li><a className="dropdown-item" href="/">Bahrain</a></li>
                            <li><a className="dropdown-item" href="/">Bangladesh</a></li>
                            <li><a className="dropdown-item" href="/">Barbados</a></li>
                            <li><a className="dropdown-item" href="/">Bavaria*</a></li>
                            <li><a className="dropdown-item" href="/">Belarus</a></li>
                            <li><a className="dropdown-item" href="/">Belgium</a></li>
                            <li><a className="dropdown-item" href="/">Belize</a></li>
                            <li><a className="dropdown-item" href="/">Benin (Dahomey)</a></li>
                            <li><a className="dropdown-item" href="/">Bolivia</a></li>
                            <li><a className="dropdown-item" href="/">Bosnia and Herzegovina</a></li>
                            <li><a className="dropdown-item" href="/">Botswana</a></li>
                            <li><a className="dropdown-item" href="/">Brazil</a></li>
                            <li><a className="dropdown-item" href="/">Brunei</a></li>
                            <li><a className="dropdown-item" href="/">Brunswick and Lüneburg</a></li>
                            <li><a className="dropdown-item" href="/">Bulgaria</a></li>
                            <li><a className="dropdown-item" href="/">Burkina Faso (Upper Volta)</a></li>
                            <li><a className="dropdown-item" href="/">Burma</a></li>
                            <li><a className="dropdown-item" href="/">Burundi</a></li>
                            <li><a className="dropdown-item" href="/"><b>C</b></a></li>
                            <li><a className="dropdown-item" href="/">Cabo Verde</a></li>
                            <li><a className="dropdown-item" href="/">Cambodia</a></li>
                            <li><a className="dropdown-item" href="/">Cameroon</a></li>
                            <li><a className="dropdown-item" href="/">Canada</a></li>
                            <li><a className="dropdown-item" href="/">Cayman Islands, The</a></li>
                            <li><a className="dropdown-item" href="/">Central African Republic</a></li>
                            <li><a className="dropdown-item" href="/">Central American Federation*</a></li>
                            <li><a className="dropdown-item" href="/">Chad</a></li>
                            <li><a className="dropdown-item" href="/">Chile</a></li>
                            <li><a className="dropdown-item" href="/">China</a></li>
                            <li><a className="dropdown-item" href="/">Colombia</a></li>
                            <li><a className="dropdown-item" href="/">Comoros</a></li>
                            <li><a className="dropdown-item" href="/">Congo Free State, The</a></li>
                            <li><a className="dropdown-item" href="/">Costa Rica</a></li>
                            <li><a className="dropdown-item" href="/">Cote d'Ivoire (Ivory Coast)</a></li>
                            <li><a className="dropdown-item" href="/">Croatia</a></li>
                            <li><a className="dropdown-item" href="/">Cuba</a></li>
                            <li><a className="dropdown-item" href="/">Cyprus</a></li>
                            <li><a className="dropdown-item" href="/">Czechia</a></li>
                            <li><a className="dropdown-item" href="/">Czechoslovakia</a></li>
                            <li><a className="dropdown-item" href="/"><b>D</b></a></li>
                            <li><a className="dropdown-item" href="/">Democratic Republic of the Congo</a></li>
                            <li><a className="dropdown-item" href="/">Denmark</a></li>
                            <li><a className="dropdown-item" href="/">Djibouti</a></li>
                            <li><a className="dropdown-item" href="/">Dominica</a></li>
                            <li><a className="dropdown-item" href="/">Dominican Republic</a></li>
                            <li><a className="dropdown-item" href="/">Duchy of Parma, The*</a></li>
                            <li><a className="dropdown-item" href="/"><b>E</b></a></li>
                            <li><a className="dropdown-item" href="/">German Democratic Republic</a></li>
                            <li><a className="dropdown-item" href="/">Ecuador</a></li>
                            <li><a className="dropdown-item" href="/">Egypt</a></li>
                            <li><a className="dropdown-item" href="/">El Salvador</a></li>
                            <li><a className="dropdown-item" href="/">Equatorial Guinea</a></li>
                            <li><a className="dropdown-item" href="/">Eritrea</a></li>
                            <li><a className="dropdown-item" href="/">Estonia</a></li>
                            <li><a className="dropdown-item" href="/">Eswatini</a></li>
                            <li><a className="dropdown-item" href="/">Ethiopia</a></li>
                            <li><a className="dropdown-item" href="/"><b>F</b></a></li>
                            <li><a className="dropdown-item" href="/">Federal Government of Germany</a></li>
                            <li><a className="dropdown-item" href="/">Fiji</a></li>
                            <li><a className="dropdown-item" href="/">Finland</a></li>
                            <li><a className="dropdown-item" href="/">France</a></li>
                            <li><a className="dropdown-item" href="/"><b>G</b></a></li>
                            <li><a className="dropdown-item" href="/">Gabon</a></li>
                            <li><a className="dropdown-item" href="/">Gambia, The</a></li>
                            <li><a className="dropdown-item" href="/">Georgia</a></li>
                            <li><a className="dropdown-item" href="/">Germany</a></li>
                            <li><a className="dropdown-item" href="/">Ghana</a></li>
                            <li><a className="dropdown-item" href="/">Grand Duchy of Tuscany</a></li>
                            <li><a className="dropdown-item" href="/">Greece</a></li>
                            <li><a className="dropdown-item" href="/">Grenada</a></li>
                            <li><a className="dropdown-item" href="/">Guatemala</a></li>
                            <li><a className="dropdown-item" href="/">Guinea</a></li>
                            <li><a className="dropdown-item" href="/">Guinea-Bissau</a></li>
                            <li><a className="dropdown-item" href="/">Guyana</a></li>
                            <li><a className="dropdown-item" href="/"><b>H</b></a></li>
                            <li><a className="dropdown-item" href="/">Haiti</a></li>
                            <li><a className="dropdown-item" href="/">Hanover*</a></li>
                            <li><a className="dropdown-item" href="/">Hanseatic Republics*</a></li>
                            <li><a className="dropdown-item" href="/">Hawaii*</a></li>
                            <li><a className="dropdown-item" href="/">Hesse*</a></li>
                            <li><a className="dropdown-item" href="/">Holy See</a></li>
                            <li><a className="dropdown-item" href="/">Honduras</a></li>
                            <li><a className="dropdown-item" href="/">Hungary</a></li>
                            <li><a className="dropdown-item" href="/"><b>I</b></a></li>
                            <li><a className="dropdown-item" href="/">Iceland</a></li>
                            <li><a className="dropdown-item" href="/">India</a></li>
                            <li><a className="dropdown-item" href="/">Indonesia</a></li>
                            <li><a className="dropdown-item" href="/">Iran</a></li>
                            <li><a className="dropdown-item" href="/">Iraq</a></li>
                            <li><a className="dropdown-item" href="/">Ireland</a></li>
                            <li><a className="dropdown-item" href="/">Israel</a></li>
                            <li><a className="dropdown-item" href="/">Italy</a></li>
                            <li><a className="dropdown-item" href="/"><b>J</b></a></li>
                            <li><a className="dropdown-item" href="/">Jamaica</a></li>
                            <li><a className="dropdown-item" href="/">Japan</a></li>
                            <li><a className="dropdown-item" href="/">Jordan</a></li>
                            <li><a className="dropdown-item" href="/"><b>K</b></a></li>
                            <li><a className="dropdown-item" href="/">Kazakhstan</a></li>
                            <li><a className="dropdown-item" href="/">Kenya</a></li>
                            <li><a className="dropdown-item" href="/">Kingdom of Serbia/Yugoslavia*</a></li>
                            <li><a className="dropdown-item" href="/">Kiribati</a></li>
                            <li><a className="dropdown-item" href="/">Korea</a></li>
                            <li><a className="dropdown-item" href="/">Kosovo</a></li>
                            <li><a className="dropdown-item" href="/">Kuwait</a></li>
                            <li><a className="dropdown-item" href="/">Kyrgyzstan</a></li>
                            <li><a className="dropdown-item" href="/"><b>L</b></a></li>
                            <li><a className="dropdown-item" href="/">Laos</a></li>
                            <li><a className="dropdown-item" href="/">Latvia</a></li>
                            <li><a className="dropdown-item" href="/">Lebanon</a></li>
                            <li><a className="dropdown-item" href="/">Lesotho</a></li>
                            <li><a className="dropdown-item" href="/">Lew Chew (Loochoo)*</a></li>
                            <li><a className="dropdown-item" href="/">Liberia</a></li>
                            <li><a className="dropdown-item" href="/">Libya</a></li>
                            <li><a className="dropdown-item" href="/">Liechtenstein</a></li>
                            <li><a className="dropdown-item" href="/">Lithuania</a></li>
                            <li><a className="dropdown-item" href="/">Luxembourg</a></li>
                            <li><a className="dropdown-item" href="/"><b>M</b></a></li>
                            <li><a className="dropdown-item" href="/">Madagascar</a></li>
                            <li><a className="dropdown-item" href="/">Malawi</a></li>
                            <li><a className="dropdown-item" href="/">Malaysia</a></li>
                            <li><a className="dropdown-item" href="/">Maldives</a></li>
                            <li><a className="dropdown-item" href="/">Mali</a></li>
                            <li><a className="dropdown-item" href="/">Malta</a></li>
                            <li><a className="dropdown-item" href="/">Marshall Islands</a></li>
                            <li><a className="dropdown-item" href="/">Mauritania</a></li>
                            <li><a className="dropdown-item" href="/">Mauritius</a></li>
                            <li><a className="dropdown-item" href="/">Mecklenburg-Schwerin*</a></li>
                            <li><a className="dropdown-item" href="/">Mecklenburg-Strelitz*</a></li>
                            <li><a className="dropdown-item" href="/">Mexico</a></li>
                            <li><a className="dropdown-item" href="/">Micronesia</a></li>
                            <li><a className="dropdown-item" href="/">Moldova</a></li>
                            <li><a className="dropdown-item" href="/">Monaco</a></li>
                            <li><a className="dropdown-item" href="/">Mongolia</a></li>
                            <li><a className="dropdown-item" href="/">Montenegro</a></li>
                            <li><a className="dropdown-item" href="/">Morocco</a></li>
                            <li><a className="dropdown-item" href="/">Mozambique</a></li>
                            <li><a className="dropdown-item" href="/"><b>N</b></a></li>
                            <li><a className="dropdown-item" href="/">Namibia</a></li>
                            <li><a className="dropdown-item" href="/">Nassau*</a></li>
                            <li><a className="dropdown-item" href="/">Nauru</a></li>
                            <li><a className="dropdown-item" href="/">Nepal</a></li>
                            <li><a className="dropdown-item" href="/">Netherlands, The</a></li>
                            <li><a className="dropdown-item" href="/">New Zealand</a></li>
                            <li><a className="dropdown-item" href="/">Nicaragua</a></li>
                            <li><a className="dropdown-item" href="/">Niger</a></li>
                            <li><a className="dropdown-item" href="/">Nigeria</a></li>
                            <li><a className="dropdown-item" href="/">North German Confederation*</a></li>
                            <li><a className="dropdown-item" href="/">North German Union*</a></li>
                            <li><a className="dropdown-item" href="/">North Macedonia</a></li>
                            <li><a className="dropdown-item" href="/">Norway</a></li>
                            <li><a className="dropdown-item" href="/"><b>O</b></a></li>
                            <li><a className="dropdown-item" href="/">Oldenburg*</a></li>
                            <li><a className="dropdown-item" href="/">Oman</a></li>
                            <li><a className="dropdown-item" href="/">Orange Free State*</a></li>
                            <li><a className="dropdown-item" href="/"><b>P</b></a></li>
                            <li><a className="dropdown-item" href="/">Pakistan</a></li>
                            <li><a className="dropdown-item" href="/">Palau</a></li>
                            <li><a className="dropdown-item" href="/">Panama</a></li>
                            <li><a className="dropdown-item" href="/">Papal States*</a></li>
                            <li><a className="dropdown-item" href="/">Papua New Guinea</a></li>
                            <li><a className="dropdown-item" href="/">Paraguay</a></li>
                            <li><a className="dropdown-item" href="/">Peru</a></li>
                            <li><a className="dropdown-item" href="/">Philippines</a></li>
                            <li><a className="dropdown-item" href="/">Piedmont-Sardinia*</a></li>
                            <li><a className="dropdown-item" href="/">Poland</a></li>
                            <li><a className="dropdown-item" href="/">Portugal</a></li>
                            <li><a className="dropdown-item" href="/"><b>Q</b></a></li>
                            <li><a className="dropdown-item" href="/">Qatar</a></li>
                            <li><a className="dropdown-item" href="/"><b>R</b></a></li>
                            <li><a className="dropdown-item" href="/">Republic of Genoa*</a></li>
                            <li><a className="dropdown-item" href="/">Republic of Korea (South Korea)</a></li>
                            <li><a className="dropdown-item" href="/">Republic of the Congo</a></li>
                            <li><a className="dropdown-item" href="/">Romania</a></li>
                            <li><a className="dropdown-item" href="/">Russia</a></li>
                            <li><a className="dropdown-item" href="/">Rwanda</a></li>
                            <li><a className="dropdown-item" href="/"><b>S</b></a></li>
                            <li><a className="dropdown-item" href="/">Saint Kitts and Nevis</a></li>
                            <li><a className="dropdown-item" href="/">Saint Lucia</a></li>
                            <li><a className="dropdown-item" href="/">Saint Vincent and the Grenadines</a></li>
                            <li><a className="dropdown-item" href="/">Samoa</a></li>
                            <li><a className="dropdown-item" href="/">San Marino</a></li>
                            <li><a className="dropdown-item" href="/">Sao Tome and Principe</a></li>
                            <li><a className="dropdown-item" href="/">Saudi Arabia</a></li>
                            <li><a className="dropdown-item" href="/">Schaumburg-Lippe*</a></li>
                            <li><a className="dropdown-item" href="/">Senegal</a></li>
                            <li><a className="dropdown-item" href="/">Serbia</a></li>
                            <li><a className="dropdown-item" href="/">Seychelles</a></li>
                            <li><a className="dropdown-item" href="/">Sierra Leone</a></li>
                            <li><a className="dropdown-item" href="/">Singapore</a></li>
                            <li><a className="dropdown-item" href="/">Slovakia</a></li>
                            <li><a className="dropdown-item" href="/">Slovenia</a></li>
                            <li><a className="dropdown-item" href="/">Solomon Islands, The</a></li>
                            <li><a className="dropdown-item" href="/">Somalia</a></li>
                            <li><a className="dropdown-item" href="/">South Africa</a></li>
                            <li><a className="dropdown-item" href="/">South Sudan</a></li>
                            <li><a className="dropdown-item" href="/">Spain</a></li>
                            <li><a className="dropdown-item" href="/">Sri Lanka</a></li>
                            <li><a className="dropdown-item" href="/">Sudan</a></li>
                            <li><a className="dropdown-item" href="/">Suriname</a></li>
                            <li><a className="dropdown-item" href="/">Sweden</a></li>
                            <li><a className="dropdown-item" href="/">Switzerland</a></li>
                            <li><a className="dropdown-item" href="/">Syria</a></li>
                            <li><a className="dropdown-item" href="/"><b>T</b></a></li>
                            <li><a className="dropdown-item" href="/">Tajikistan</a></li>
                            <li><a className="dropdown-item" href="/">Tanzania</a></li>
                            <li><a className="dropdown-item" href="/">Texas*</a></li>
                            <li><a className="dropdown-item" href="/">Thailand</a></li>
                            <li><a className="dropdown-item" href="/">Timor-Leste</a></li>
                            <li><a className="dropdown-item" href="/">Togo</a></li>
                            <li><a className="dropdown-item" href="/">Tonga</a></li>
                            <li><a className="dropdown-item" href="/">Trinidad and Tobago</a></li>
                            <li><a className="dropdown-item" href="/">Tunisia</a></li>
                            <li><a className="dropdown-item" href="/">Turkey</a></li>
                            <li><a className="dropdown-item" href="/">Turkmenistan</a></li>
                            <li><a className="dropdown-item" href="/">Tuvalu</a></li>
                            <li><a className="dropdown-item" href="/">Two Sicilies*</a></li>
                            <li><a className="dropdown-item" href="/"><b>U</b></a></li>
                            <li><a className="dropdown-item" href="/">Uganda</a></li>
                            <li><a className="dropdown-item" href="/">Ukraine</a></li>
                            <li><a className="dropdown-item" href="/">Union of Soviet Socialist Republics*</a></li>
                            <li><a className="dropdown-item" href="/">United Arab Emirates, The</a></li>
                            <li><a className="dropdown-item" href="/">United Kingdom, The</a></li>
                            <li><a className="dropdown-item" href="/">Uruguay</a></li>
                            <li><a className="dropdown-item" href="/">Uzbekistan</a></li>
                            <li><a className="dropdown-item" href="/"><b>V</b></a></li>
                            <li><a className="dropdown-item" href="/">Vanuatu</a></li>
                            <li><a className="dropdown-item" href="/">Venezuela</a></li>
                            <li><a className="dropdown-item" href="/">Vietnam</a></li>
                            <li><a className="dropdown-item" href="/"><b>W</b></a></li>
                            <li><a className="dropdown-item" href="/">Württemberg*</a></li>
                            <li><a className="dropdown-item" href="/"><b>Y</b></a></li>
                            <li><a className="dropdown-item" href="/">Yemen</a></li>
                            <li><a className="dropdown-item" href="/"><b>Z</b></a></li>
                            <li><a className="dropdown-item" href="/">Zambia</a></li>
                            <li><a className="dropdown-item" href="/">Zimbabwe</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Skills
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Most Liked
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Today</a></li>
                            <li><a className="dropdown-item" href="/">This Week</a></li>
                            <li><a className="dropdown-item" href="/">This Month</a></li>
                            <li><a className="dropdown-item" href="/">This Year</a></li>
                            <li><a className="dropdown-item" href="/">All Time</a></li>
                        </ul>
                    </div>
                </div>
            </div>




            <div className="container-sm my-5">
                <div className="postDabba row row-cols-2">

                    <div className="itemsss col my-2">
                        <div className="head">
                            <img src={profile} alt="" />
                            <p className="card-text">Name LastName<span className="badge rounded-pill bg-warning text-dark my-2">Primary Skill</span></p>
                            <i onClick={props.savePost} className={`saveBtn ${props.saved} fa-bookmark align-items-center`}></i>
                        </div>
                        <div className="midContent">
                            <img src={image} className="card-img-top mx-5" alt="..."/>
                            <p className="card-text">Caption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Some quick example text to build on the card title and make up the bulk of the card's content.<small className="text-muted text-end"> ...Posted 6 hours ago</small></p>
                        </div>
                        <hr />
                        <div className="reaction">
                            <button onClick={props.upvote} className="btn" name="btnradio" id="btnradio1"><i className={`${props.like} fa-thumbs-up align-items-center`}></i></button>
                            <button onClick={props.downvote} className="btn" name="btnradio" id="btnradio2"><i className={`${props.dislike} fa-thumbs-down align-items-center`}></i></button>
                            <button className='btn'><i className="fas fa-share-alt align-items-center"></i></button>
                            <button className='btn'><i className="fab fa-telegram-plane align-items-center"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
