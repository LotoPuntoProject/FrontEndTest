import React,{ useState } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter } from 'react-router-dom';

import {
    FormControl,
    InputLabel ,
    OutlinedInput
} from '@material-ui/core/';

import classes from './loginForm.module.css';

import Logo from '../ui/logo';
import ButtonL from '../ui/buttonL';

const baseUrl ='http://demo3635687.mockable.io';

const LoginForm = (props) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function login(e) {
        e.preventDefault();
        axios.post(baseUrl+'/login', {
            email: email,
            password: password
        }).then((response) => {
            // Respuesta del servidor
            sessionStorage.setItem("TOKEN", response.data.authorizationToken);
            sessionStorage.setItem("AUTH_ITEMS", JSON.stringify(response.data.permissions));
            sessionStorage.setItem("IS_LOGGED", "TRUE");
            window.location='/home';
        }).catch(e => {
            console.log(e);
        },[]);
    }
    return (
        <div className="login">
            <BrowserRouter>
            <Grid container >
                <form  id="login">
                <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                                { props.withLogo && <Logo width="247"/> }
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" id="userNameInput" className={classes.loginInput}>
                                <InputLabel htmlFor="username">Email</InputLabel>
                                <OutlinedInput id="username" label="username" required  type="email" onChange={e => setEmail(e.target.value)}/>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" id="userPasswordInput" className={classes.loginInput}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput id="password " label="Password" type="password" required onChange={e => setPassword(e.target.value)}/>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <ButtonL clastText={classes.lotoButtonText} class={classes.loginInput} action={login}>
                                LOG IN
                            </ButtonL>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            </BrowserRouter>

        </div>
    );
}

export default LoginForm;