import React, {useState} from "react";
import ClickAwayListener from 'react-click-away-listener';

import classes from "./infoTooltip.module.css"

const InfoTooltip = (props) => {
    const [ open, setOpen ]=useState(props.open);
    const divStyle = {
        /*top: -props.children.height/4,*/
        left: props.children.width
    };
    const handleClickAway = () => {
        setOpen(false);
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <span onClick={ () => setOpen(!open) } width={props.width}>
                {props.children}
            </span>
            <div style={ divStyle } className={[classes.globo, open ? classes.open : classes.close, classes.arrowAfter].join(" ")} >
                <span className={classes.x_close} onClick={ () => setOpen(!open) }>X</span>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </ClickAwayListener>
    )
}

export default InfoTooltip;