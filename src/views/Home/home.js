import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core/styles';

import logo from './assets/img/logo.svg'
import seg from './assets/img/seguridad.svg'
import tyc from './assets/img/tyc.svg'

import PrincipalButton from "./components/PrincipalButton/PrincipalButton.js";

import './App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo:{
        backgroundImage: "url(./assets/img/logo.png)",
        height:"50vh",
        width:"24vw"
    },
    buttons:{
        height:"25vh",
    },
    imgButton:{
        height:"130px",
        marginTop:"5%"

    },
    header:{
        backgroundImage: "url(./assets/img/logo.png)",
        height:"15vh",
        paddingTop: "5%"
    }
}));

const images = [
    {
        product: 'Recargas',
        url: require('./assets/img/recargas.svg'),
    },
    {
        product: 'Loterías',
        url: require('./assets/img/loterias.svg'),

    },
    {
        product: 'Giros',
        url: require('./assets/img/giros.svg'),
    },
    {
        product: 'Facturas',
        url: require('./assets/img/facturas.svg'),
    },
];


function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <Grid container direction="column">
                <Grid container item className={classes.header}>
                    <Grid container item xs={2} sm={2} md={1} lg={1}>
                        <Grid item xs={11} sm={11} md={12} lg={12}>
                            <Tooltip title="Add" arrow placement="right-end">
                            <span>
                                <img src={seg} alt="seg"/>
                            </span>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={11} sm={11} md={12} lg={12}>
                            <Tooltip title="Add" arrow placement="right-end">
                            <span   >
                                <img src={tyc} alt="tyc"/>
                            </span>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item justify="center">
                    <img src={logo} className={classes.logo} alt="Loto punto"/>
                </Grid>
                <Grid
                    container
                    item
                    direction="row"
                    justify="center"
                >


                    {images.map((image,index) => (
                        <Grid container justify="center" direction="row" item xs={12} sm={6} md={3} lg={3} className={classes.bottons} key={index}>
                            <PrincipalButton>
                                <Grid container item direction="row" spacing={12}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <h4>{image.product}</h4>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <img src={image.url} className={classes.imgButton} alt={image.product}/>
                                    </Grid>
                                </Grid>
                            </PrincipalButton>
                        </Grid>
                    ))}

                </Grid>
            </Grid>
        </div>
    );
}

export default App;
