import React,{ useEffect } from "react";
import axios from 'axios';


;

const baseUrl ='http://demo3635687.mockable.io';

const LogOut = (props) => {

    useEffect(() => {
        console.log('test');
        axios.post(baseUrl+'/logout',{
            email:"",
            passwor:""
            }
        ).then((response) => {
            // Respuesta del servidor
            sessionStorage.removeItem("TOKEN");
            sessionStorage.removeItem("AUTH_ITEMS");
            sessionStorage.setItem("IS_LOGGED", "FALSE");

            console.log(sessionStorage);
            window.location='/login';
        }).catch(e => {
            console.log(e);
        });
    })



    return (
        <div className="logout" >



        </div>
    );
}

export default LogOut;