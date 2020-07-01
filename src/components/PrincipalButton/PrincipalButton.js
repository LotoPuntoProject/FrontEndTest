import React from 'react';
import Button from '@material-ui/core/Button';

import classes  from './PrincipalButton.module.css';


// We can inject some CSS into the DOM.


function ClassNames(props) {
    return (
        <Button className={ props.type ? classes[props.type] : classes.principalButton }>
            { props.children || 'class names'}
        </Button>
    );
}


export default (ClassNames);