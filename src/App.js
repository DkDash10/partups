import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import About from "./components/myprofile/About";
import Contact from "./components/contact/Contact";
import Categories from "./components/categories/Categories";
import Post from "./components/post/Post";
import ProfileInCategory from "./components/categories/ProfileInCategory";
// import SkillForm from "./components/skillform/SkillForm";
import EditProfile from "./components/categories/EditProfile";
import Upload from "./components/myprofile/Upload";
import ThatProfile from "./components/thatprofile/ThatProfile";
import Alert from "./components/Alert";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/Posts";
import ChatRoom from "./components/chatroom/ChatRoom";
import ChatArea from "./components/chatroom/ChatArea";

function App() {
 
  const [alert, setAlert] = useState(null);

  const [modeTxt, setModeTxt] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (modeTxt === "Enable Dark Mode") {
      setModeTxt("Enable Light Mode");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setModeTxt("Enable Dark Mode");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  let menuStyle = {
    color: mode === "light" ? "1a1c1d" : "white",
    backgroundColor: mode === "light" ? "#1a1c1d" : "rgb(189, 189, 189)",
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} />
        <Alert alert={alert} />

        <Switch>
          <GuestRoute path="/" exact>
            <Login showAlert={showAlert} />
          </GuestRoute>
          <GuestRoute path="/signup" exact>
            <Signup showAlert={showAlert} />
          </GuestRoute>

          <ProtectedRoute path="/home">
            <Home
              showAlert={showAlert}
              mode={mode}
              toggleMode={toggleMode}
              modeTxt={modeTxt}
              menuStyle={menuStyle}
            />
          </ProtectedRoute>
          <ProtectedRoute exact path="/post">
            <Post
              mode={mode}
              toggleMode={toggleMode}
              modeTxt={modeTxt}
              menuStyle={menuStyle}
            />
          </ProtectedRoute>
          <ProtectedRoute exact path="/about">
            <About mode={mode} toggleMode={toggleMode} />
          </ProtectedRoute>

          <ProtectedRoute exact path="/categories">
            <Categories mode={mode} toggleMode={toggleMode} />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profileInCategory">
            <ProfileInCategory
              mode={mode}
              toggleMode={toggleMode}
              modeTxt={modeTxt}
            />
          </ProtectedRoute>
          {/* <ProtectedRoute exact path="/skillform">
            <SkillForm mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} />
          </ProtectedRoute> */}
          <ProtectedRoute exact path="/editprofile">
            <EditProfile
              mode={mode}
              toggleMode={toggleMode}
              modeTxt={modeTxt}
            />
          </ProtectedRoute>
          <ProtectedRoute exact path="/upload">
            <Upload
              mode={mode}
              toggleMode={toggleMode}
              modeTxt={modeTxt}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </ProtectedRoute>
          <ProtectedRoute exact path="/thatProfile">
            <ThatProfile
              mode={mode}
              toggleMode={toggleMode}
              modeTxt={modeTxt}
            />
          </ProtectedRoute>
          <ProtectedRoute exact path="/chatroom">
            <ChatRoom mode={mode} toggleMode={toggleMode} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/chatarea">
            <ChatArea mode={mode} toggleMode={toggleMode} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/contact">
            <Contact mode={mode} toggleMode={toggleMode} />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Route
      {...rest}
      render={() => {
        return user ? (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Route
      {...rest}
      render={() => {
        return !user ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
