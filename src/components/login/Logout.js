import React, {useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import{UserContext} from "../../App";

const Logout =()=>{
  const {dispatch} = useContext(UserContext);

    let history=useHistory();

    useEffect(()=>{
         fetch('/logout',{
             method : "GET",
             headers: {
             "Content-Type": "application/json",
             },
         }).then((res) =>{
             dispatch({type:"USER", payload:false})

             history.push('/', {replace: true });
             if(res.status===!200){
                 const error = new Error(res.error);
                 throw error;
             }
         }).catch((err)=>{
             console.log(err);
         })
    });
    return(
        <>
        <h1>Bye have a great time</h1>
        </>
    )
}

export default Logout