// //just for now during posts


import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import './navbar.scss';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    // backgroundColor: props.mode==='light'?'rgba(219, 228, 236, 0.794)':'#2f3235d5'    // blue
    backgroundColor:
      props.mode === "light" ? "rgba(230, 217, 255, 0.87)" : "#2f3235d5", // purple
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  

  return (
    <nav
      id="nav"
      className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-bs-kuchBhi`}
      style={myStyle}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Partups
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* {user?.result ? (

            ) : ()} */}
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/home" ? "active" : ""
              }`}
              aria-current="page"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/chatroom" ? "active" : ""
              }`}
              to="/chatroom"
            >
              ChatRoom
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/categories" ? "active" : ""
              }`}
              to="/categories"
            >
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              My Profile
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              to="/contact"
            >
              Contact Us
            </Link>
          </li> */}
          <li className="nav-item dropdown mainwala">
            <Link
              className={`nav-link dropdown-toggle mainsub ${
                location.pathname === "/menu" ? "active" : ""
              }`}
              to="/menu"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-item" onClick={props.toggleMode}>
                {props.modeTxt}
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="dropdown-item" onClick={logout}>
                  LogOut
                </div>
              </li>
            </ul>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useHistory } from "react-router-dom";
// import './navbar.scss';
// import { useDispatch } from "react-redux";
// import decode from 'jwt-decode';
// import * as actionType from '../../constants/actionTypes';

// const Navbar = (props) => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();


//   let myStyle = {
//     color: props.mode === "light" ? "black" : "white",
//     // backgroundColor: props.mode==='light'?'rgba(219, 228, 236, 0.794)':'#2f3235d5'    // blue
//     backgroundColor:
//       props.mode === "light" ? "rgba(230, 217, 255, 0.87)" : "#2f3235d5", // purple
//   };

//   const logout = () => {
//     dispatch({ type: actionType.LOGOUT });
//     history.push('/');
//     setUser(null);
//   };

//   useEffect(() => {
//     const token = user?.token;

//     if (token) {
//       const decodedToken = decode(token);

//       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }

//     setUser(JSON.parse(localStorage.getItem('profile')));
//   }, [location]);
  

//   return (
//     <nav
//       id="nav"
//       className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-bs-kuchBhi`}
//       style={myStyle}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/home">
//           Partups
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {user?.result ? (

//             ) : ()}
//           <li className="nav-item">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/home" ? "active" : ""
//               }`}
//               aria-current="page"
//               to="/home"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/chatroom" ? "active" : ""
//               }`}
//               to="/chatroom"
//             >
//               ChatRoom
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/categories" ? "active" : ""
//               }`}
//               to="/categories"
//             >
//               Categories
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/about" ? "active" : ""
//               }`}
//               to="/about"
//             >
//               My Profile
//             </Link>
//           </li>
//           {/* <li className="nav-item">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/contact" ? "active" : ""
//               }`}
//               to="/contact"
//             >
//               Contact Us
//             </Link>
//           </li> */}
//           <li className="nav-item dropdown mainwala">
//             <Link
//               className={`nav-link dropdown-toggle mainsub ${
//                 location.pathname === "/menu" ? "active" : ""
//               }`}
//               to="/menu"
//               id="navbarDropdown"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Menu
//             </Link>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li className="dropdown-item" onClick={props.toggleMode}>
//                 {props.modeTxt}
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/">
//                   Action
//                 </Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/">
//                   Action
//                 </Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/">
//                   Action
//                 </Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/contact">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>
//                 <div className="dropdown-item" onClick={logout}>
//                   LogOut
//                 </div>
//               </li>
//             </ul>
//           </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;





// // import React, { useEffect, useContext } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { UserContext } from "../../App";
// // import './navbar.scss';

// // const Navbar = (props) => {
// //   let myStyle = {
// //     color: props.mode === "light" ? "black" : "white",
// //     // backgroundColor: props.mode==='light'?'rgba(219, 228, 236, 0.794)':'#2f3235d5'    // blue
// //     backgroundColor:
// //       props.mode === "light" ? "rgba(230, 217, 255, 0.87)" : "#2f3235d5", // purple
// //   };

// //   const { state } = useContext(UserContext);
// //   const RenderMenu = () => {
// //     if (state) {
// //       return (
// //         <>
// //           <li className="nav-item">
// //             <Link
// //               className={`nav-link ${
// //                 location.pathname === "/home" ? "active" : ""
// //               }`}
// //               aria-current="page"
// //               to="/home"
// //             >
// //               Home
// //             </Link>
// //           </li>
// //           <li className="nav-item">
// //             <Link
// //               className={`nav-link ${
// //                 location.pathname === "/about" ? "active" : ""
// //               }`}
// //               to="/about"
// //             >
// //               My Profile
// //             </Link>
// //           </li>
// //           <li className="nav-item">
// //             <Link
// //               className={`nav-link ${
// //                 location.pathname === "/categories" ? "active" : ""
// //               }`}
// //               to="/categories"
// //             >
// //               Categories
// //             </Link>
// //           </li>
// //           <li className="nav-item">
// //             <Link
// //               className={`nav-link ${
// //                 location.pathname === "/contact" ? "active" : ""
// //               }`}
// //               to="/contact"
// //             >
// //               Contact Us
// //             </Link>
// //           </li>
// //           <li className="nav-item dropdown mainwala">
// //             <Link
// //               className={`nav-link dropdown-toggle mainsub ${
// //                 location.pathname === "/settings" ? "active" : ""
// //               }`}
// //               to="/settings"
// //               id="navbarDropdown"
// //               role="button"
// //               data-bs-toggle="dropdown"
// //               aria-expanded="false"
// //             >
// //               Settings
// //             </Link>
// //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
// //               <li className="dropdown-item" onClick={props.toggleMode}>
// //                 {props.modeTxt}
// //               </li>
// //               <li>
// //                 <Link className="dropdown-item" to="/">
// //                   Action
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="dropdown-item" to="/">
// //                   Action
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="dropdown-item" to="/">
// //                   Action
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="dropdown-item" to="/">
// //                   Blog
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="dropdown-item" to="/">
// //                   About Us
// //                 </Link>
// //               </li>
// //               <li>
// //                 <hr className="dropdown-divider" />
// //               </li>
// //               <li>
// //                 <Link className="dropdown-item" to="/logout">
// //                   LogOut
// //                 </Link>
// //               </li>
// //             </ul>
// //           </li>
// //         </>
// //       );
// //     } else {
// //       return (
// //         <>
// //             <Link className="btn btn-primary mx-1" to="/" role="button">
// //               Login
// //             </Link>
// //             <Link className="btn btn-primary mx-1" to="/signup" role="button">
// //               Signup
// //             </Link>
          
// //         </>
// //       );
// //     }
// //   };

// //   let location = useLocation();
// //   useEffect(() => {
// //     console.log(location);
// //   }, [location]);

// //   return (
// //     <nav
// //       id="nav"
// //       className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-bs-kuchBhi`}
// //       style={myStyle}
// //     >
// //       <div className="container-fluid">
// //         <Link className="navbar-brand" to="/home">
// //           Partups
// //         </Link>
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //             <RenderMenu />
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };
// // export default Navbar;
