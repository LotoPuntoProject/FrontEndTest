import React from "react";
import Grid from "@material-ui/core/Grid";

import LoginForm from "../../components/loginForm/loginForm";


const LoginPage = () => {
    return (
        <Grid container direction="row" alignItems="center">
            <Grid container direction="column" alignItems="center">
                <LoginForm withLogo={true} />
            </Grid>
        </Grid>
    );
}

export default LoginPage;