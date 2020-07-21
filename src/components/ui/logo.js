import React from "react";
import logo from "../../assets/img/logo.svg"

const Logo = (props) => {
    return (
            <img src={ logo } width={props.width} height={props.height}/>
        )
}

export default Logo;