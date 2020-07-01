import React, { useState } from "react";

//design
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

//components
import logo from './assets/img/logo.svg'
import PrincipalButton from "./components/PrincipalButton/PrincipalButton.js";


//styles
import './App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo:{
        backgroundImage: "url(./assets/img/logo.png)",
        height:"30vh",
        width:"15vw"
    },
    buttons:{
        width: "343px",
        height: "52px",
    },

    header:{
        height:"15vh",
        paddingTop: "5%"
    }
}));




/*function handleSubmit(event) {
    event.preventDefault();
}*/

const App= () => {
    const classes = useStyles();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const baseURL = process.env.REACT_APP_API;

    // no debe estar la petición en el componente con acceso a las funciones.
    const sendForm = (e)=> {
        fetch('http://localhost:3001/', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return (
    <div className="App">
        <h1>{ baseURL }</h1>
        <Grid container direction="column">
            <Grid container item className={classes.header} />
            <form onSubmit={sendForm()} id="login">
                <Grid container direction="row" justify="center">
                    <img src={logo} className={classes.logo} alt="Loto punto"/>
                </Grid>
                <Grid container direction="row" justify="center">
                    <FormControl variant="outlined" id="userNameInput">
                        <InputLabel htmlFor="username">Email</InputLabel>
                        <OutlinedInput id="username" label="username" value={email} onChange={e => setEmail(e.target.value)}/>
                    </FormControl>
                </Grid>
                <Grid container direction="row" justify="center">
                    <FormControl variant="outlined" id="userPasswordInput">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput id="password " label="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </FormControl>
                </Grid>
                <Grid>
                    <PrincipalButton type="buttonLogin">
                        <h4>LOG IN</h4>
                    </PrincipalButton>
                </Grid>
            </form>
        </Grid>
    </div>
  );
}

export default App;
