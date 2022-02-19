import './App.css';
import React,{createContext, useEffect, useReducer, useState } from  'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import About from './components/myprofile/About';
import Contact from './components/contact/Contact';
import Categories from './components/categories/Categories';
import Post from './components/post/Post'
import SavedPosts from './components/savedpost/SavedPosts';
import ProfileInCategory from './components/categories/ProfileInCategory';
import SkillForm from './components/skillform/SkillForm';
import EditProfile from './components/categories/EditProfile';
import Upload from './components/myprofile/Upload';
import ThatProfile from './components/thatprofile/ThatProfile';
import Alert from './components/Alert';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import Signup from './components/login/Signup';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/Posts'
// import{initialState,  reducer} from '../src/reducer/UseReducer';


export const UserContext = createContext();


function App() {
  const [alert, setAlert]= useState(null);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [modeTxt, setModeTxt] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [like, setLike] = useState('far');
  const [dislike, setDislike] = useState('far');
  const [saved, setSaved] = useState('far');
  const dispatch = useDispatch();

useEffect(()=>{
   dispatch(getPosts());
}, [dispatch])

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }; 

 
  const toggleMode = () =>{
    if(modeTxt === "Enable Dark Mode"){
        setModeTxt("Enable Light Mode");
        setMode("dark");
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
    else{
        setModeTxt("Enable Dark Mode");
        setMode("light");
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
}

const upvote = () =>{
  if (like === 'far'){
    setLike('fas');
    setDislike('far');
  }
  else if(like === 'fas'){
    setLike('far');
    setDislike('far');
  }
}
const downvote = () =>{
  if (dislike === 'far'){
    setDislike('fas');
    setLike('far');
  }
  else if(dislike === 'fas'){
    setDislike('far');
    setLike('far');
  }
}
const savePost = () =>{
  if (saved === 'far'){
    setSaved('fas');
  }
  else if(saved === 'fas'){
    setSaved('far')
  }
}


let menuStyle = {
  color: mode==='light'?'1a1c1d':'white',           
  backgroundColor: mode==='light'?'#1a1c1d':'rgb(189, 189, 189)'
}

  // const Routing=()=>{
  //   return(
   
  //   )
  // }
    
  return (
    <>
    
    {/* <UserContext.Provider value={{state, dispatch}}> */}
    <UserContext.Provider >
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}/>
      <Alert alert={alert} />

      {/* <div className="container-sm"> */}
  <Switch>
        <Route exact path="/">
        <Login showAlert={showAlert}  />
        </Route>
        <Route exact path="/about">
        <About mode={mode} toggleMode={toggleMode}/>
        </Route> 
        <Route exact path="/contact">
        <Contact mode={mode} toggleMode={toggleMode}/>
        </Route> 
        <Route exact path="/categories">
            <Categories mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/home">
        <Home showAlert={showAlert} mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} menuStyle={menuStyle} like={like} dislike={dislike} saved={saved} upvote={upvote} downvote={downvote} savePost={savePost}/>
        </Route>
        <Route exact path="/signup">
        <Signup showAlert={showAlert}/>
        </Route>   
        <Route exact path="/logout">
        <Logout />
        </Route> 
        <Route exact path="/post">
            <Post  mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt} menuStyle={menuStyle} like={like} dislike={dislike} saved={saved} upvote={upvote} downvote={downvote} savePost={savePost}/>
          </Route>
        
        <Route exact path="/savedPosts">
            <SavedPosts  mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt} menuStyle={menuStyle} like={like} dislike={dislike} saved={saved} upvote={upvote} downvote={downvote} savePost={savePost}/>
          </Route>
          <Route exact path="/profileInCategory">
            <ProfileInCategory  mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt}/>
          </Route>
          <Route exact path="/skillform">
            <SkillForm  mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt}/>
          </Route>
          <Route exact path="/editprofile">
            <EditProfile  mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt}/>
          </Route>
          <Route exact path="/upload">
            <Upload  mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt}/>
          </Route>
          <Route exact path="/thatProfile">
            <ThatProfile mode={mode} toggleMode={toggleMode}  modeTxt={modeTxt}/>
          </Route>
      </Switch>
      {/* </div> */}
      {/* <Routing /> */}
      </Router>
  
    </UserContext.Provider>
   
    </>
  );
}

export default App;
