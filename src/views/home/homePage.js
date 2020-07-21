import React, {useState,useEffect} from "react";

import { Grid, Box} from "@material-ui/core";
import axios from "axios";

import classes from './homePage.module.css'

import ButtonL from "../../components/ui/buttonL";
import Logo from "../../components/ui/logo";



const baseUrl ='http://demo3635687.mockable.io';
const token = sessionStorage.getItem("TOKEN");

const authAxio = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: 'Bearer ' + token
    }
});


const HomePage = (props) => {
    const [legal, setLegal] = useState("");
    const [products, setProducts] = useState([]);

    useEffect((data) => {
        authAxio.get(baseUrl + '/home').then((response) => {
            // Respuesta del servidor

            setLegal(response.data.legal);
            setProducts(response.data.products);


        }).catch(e => {
            console.log(e);
        })
    },[])

    return (
        <Grid container direction="row" alignItems="center">
            <Grid container direction="column" alignItems="center">


            </Grid>
            <Grid container direction="column" alignItems="center">
                <Logo width="247"/>
            </Grid>
            <Box mx="auto" xs={12} sm={12} md={12} lg={12}>
                <Grid container direction="column" alignItems="center">
                    <Grid container direction="row" spacing={4}>
                    {
                        products.map((products,index) => (
                            //var url = products.url

                            <Grid item  md={3} key={index} >
                                <ButtonL id={index} class={classes.sliderButtons}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <h4>{products.name}</h4>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <img width="140" src={ require('../../assets/img/'+products.iconName)}  alt={products.product} />
                                    </Grid>
                                </ButtonL>
                            </Grid>
                        ))
                    }
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}

export default HomePage;