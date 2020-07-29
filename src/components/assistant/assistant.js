import React from "react";
import classes from "./assistant.module.css";

const Assistant = (props) => {
    console.log('entra');

    const divStyle={
        width: props.width,
        height: props.height
    }
    return (
        <div className={ [ classes[props.gesture], classes.container].join(" ") } style={ divStyle } alt={props.gesture}></div>
    )
}

export default Assistant;