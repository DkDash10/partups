import React, {useEffect, useState} from "react";
import './contact.scss'

const Contact = () => {

   const [userData, setUserData] = useState({username:"", email:"", message:""});

   const userContact= async ()=>{
     try{
       const res = await fetch ('/',{
         method : "GET",
         headers:{
           "Content-Type": "application/json"
         },
       });

       const data =await res.json();
       console.log(data);
       setUserData({...userData, username:data.username, email:data.email});

       if(!res.status === 200){
         const error = new Error(res.error);
         throw error;
       }
     }catch(err){
       console.log(err);
     }
   }

   useEffect(()=>{
     userContact();
   }, []);

   const handleInputs =(e)=>{
     const name = e.target.name;
     const value = e.target.value;

     setUserData({...userData, [name]:value});

   }
  return (
    <>
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-80">
        {/* <div className="container"> */}
              <div className="contact-row">
          <div className="card">
            <div className="card-body p-lg-5">
              <h3 className="shadow-sm mt-2 p-2 rounded">Lets Connect</h3>
              {/* <div className="card"> */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
            Username
          </label>
                  <input
                  name="username"
                    type="text"
                    className="form-control"
                    value={userData.username}
                  onchange={handleInputs}

                    // placeholder="Full Name"
                    aria-label="Username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
            Email Id
          </label>
                  <input
                  name="email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={userData.email}
                  onchange={handleInputs}

                    // placeholder="Email Id"
                  />
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
            Contact Number
          </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    // placeholder="Contact Number"
                  />
                </div> */}
              <div className="mb-3">
                <label for="message" className="form-label">
                  Type your message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={userData.message}
                  onchange={handleInputs}
                  rows="3"
                  ></textarea>
              </div>
              <button type="submit" className="btn-2">
                Send Message
              </button>
                  </div>
            </div>
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
