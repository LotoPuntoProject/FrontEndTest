import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const AutoLogin = () => {
    let { url } = useParams();
    useEffect(() => {
        axios.get('http://'+url+'/api/machine/autologin/').then((response) => {
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
    return(null);
}

export default AutoLogin;