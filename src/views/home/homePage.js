import React, {useState,useEffect} from "react";

import { Grid, Container } from "@material-ui/core";
import axios from "axios";

import classes from './homePage.module.css'

import ButtonL from "../../components/ui/buttonL";
import Logo from "../../components/ui/logo";
import InfoTooltip from "../../components/infoTooltip/infoTooltip";
import Assistant from "../../components/assistant/assistant";

import iconoLegal from "./../../assets/img/legal/seguridad.svg"
import iconoTyc from "./../../assets/img/legal/tyc.svg"

const baseUrl ='http://demo3635687.mockable.io';
const token = sessionStorage.getItem("TOKEN");

const authAxio = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: 'Bearer ' + token
    }
});


const HomePage = () => {
    const [legal, setLegal] = useState("");
    const [products, setProducts] = useState([]);
    const [gesture, setGesture] = useState('happy');
    const [open,setOpen] = useState(false);

    useEffect(() => {
        authAxio.get(baseUrl + '/home').then((response) => {
            setLegal(response.data.legal);
            setProducts(response.data.products);
        }).catch(e => {
            console.log(e);
        })
    },[])

    return (
        <Container maxWidth="md">
            <Grid container direction="row" alignItems="center" spacing={4} className={classes.divier}>
                <Grid item md={4}>
                    <Grid container direction="column">
                        <Grid item className={classes.tooltip} onClick={() => setGesture('reader')} md={4}>
                            <InfoTooltip
                                onClick={()=>setOpen(true)}
                                title="Políticas de seguridad"
                                body={ legal.securityPolicy }
                            >
                                <img width="54" height="54" src={ iconoLegal } alt={ iconoLegal } />
                            </InfoTooltip>
                        </Grid>
                        <Grid item className={classes.tooltip} onClick={() => setGesture('reader')} md={4}>
                            <InfoTooltip
                                title="Terminos y condiciones"
                                body={ legal.legalTerms }
                            >
                                <img width="54" height="54" src={ iconoTyc } alt={ iconoTyc } />
                            </InfoTooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <div>Buscar</div>
                    <Logo width="247"/>
                </Grid>

                <Grid item md={4}>
                    <Assistant gesture={ gesture } width="185" height="185"/>
                </Grid>
            </Grid>


            <Grid container direction="row" spacing={4} alignItems="center" className={classes.divier}>
            {
                products.map((products,index) => (
                    <Grid item  md={3} key={index} >
                        <ButtonL id={index} class={classes.sliderButtons}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <h4>{products.name}</h4>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <img width="140" src={ require('../../assets/img/products/'+products.iconName) }  alt={products.product} />
                            </Grid>
                        </ButtonL>
                    </Grid>
                ))
            }
            </Grid>
        </Container>
    );
}

export default HomePage;