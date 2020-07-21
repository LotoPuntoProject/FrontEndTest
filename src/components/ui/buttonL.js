import React from "react";

import { Button } from '@material-ui/core/';

import classes from './buttonL.module.css';

const ButtonL = (props) => {
    return (
        <Button variant="contained" className={[props.class, classes.lotoButton].join(" ")} onClick={ props.action ? (ev)=>props.action(ev) : console.log('add prop function')}>
            <span className={props.clastText}>
                {props.children}
            </span>
        </Button>
    )
}

export default ButtonL;