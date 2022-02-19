import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
import music from './guitar.png'
import video from './filming.png'
import startups from './startuppps.png'
import art from './arts.png'
import writing from './writing.png'
import coding from './coding.png'
import market from './market.png'
import design from './design.png'
import architect from './architect.png'
import camera from './camera.png'


export default function Categories() {
    return (
        <>
        <div id="categories">
            <div className="dabba">
                <div className="box item1">
                    <Link to="/profileInCategory">
                        <img src={music} alt=""/>
                        <p>1. MUSIC</p>
                    </Link>
                </div>
                <div className="box item2">
                    <Link to="/video">
                        <img src={video} alt=""/>
                        <p>2. VIDEO PRODUCTION</p>
                    </Link>
                </div>
                <div className="box item3">
                    <Link to="/startup">
                        <img src={startups} alt="logo"/>
                        <p>3. START UPS </p>
                    </Link>
                </div>
                <div className="box item4">
                    <Link to="/art">
                        <img src={art} alt=""/>
                        <p>4. ART </p>
                    </Link>
                </div>
                <div className="box item5">
                    <Link to="/writing">
                        <img src={writing} alt=""/>
                        <p>5. WRITING </p>
                    </Link>
                </div>
                <div className="box item6">
                    <Link to="/programming">
                        <img src={coding} alt=""/>
                        <p>6. PROGRAMMING </p>
                    </Link>
                </div>
                <div className="box item7">
                    <Link to="/marketting">
                        <img src={market} alt=""/>
                        <p>7. MARKETTING </p>
                    </Link>
                </div>
                <div className="box item8">
                    <Link to="/designing">
                        <img src={design} alt=""/>
                        <p>8. DESIGNING </p>
                    </Link>
                </div>
                <div className="box item9">
                    <Link to="/architecture">
                        <img src={architect} alt=""/>
                        <p>9. ARCHITECTURE </p>
                    </Link>
                </div>
                <div className="box item10">
                    <Link to="/photography">
                        <img src={camera} alt=""/>
                        <p>10. PHOTOGRAPHY </p>
                    </Link>
                </div>
            </div>
            {/* <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
            <script src="burger.js"></script> */}
        </div>
        </>
    )
}

