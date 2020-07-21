import React,{ useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';



const AutoLogin = (props) => {
    let { url } = useParams();
    useEffect(() => {
        axios.get('http://'+url+'/rasberry').then((response) => {
            // Respuesta del servidor
            sessionStorage.setItem("TOKEN", response.data.authorizationToken);
            sessionStorage.setItem("AUTH_ITEMS", JSON.stringify(response.data.permissions));
            sessionStorage.setItem("IS_LOGGED", "TRUE");
            window.location='/home';
            console.log(response.data)
        }).catch(e => {
            console.log(e);
        });
    })



    return (
        <div className="autoLogin" >



        </div>
    );
}

export default AutoLogin;