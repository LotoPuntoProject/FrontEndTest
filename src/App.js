import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

import classes from './App.module.css';

import LoginPage from './views/login/loginPage';
import HomePage from "./views/home/homePage";
import LogOut from "./views/logout/logout";
import AutoLogin from "./views/autoLogin/autoLogin";

export const history = createHashHistory();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFC338'
        }
    }
});

const App = ({history}) =>
   (
       <MuiThemeProvider theme={theme}>
           <div className={classes.page_container}>
               <BrowserRouter>
                   <Switch>

                       <Route exact path="/home" component={HomePage} />
                       <Route exact path="/" component={LoginPage} />
                       <Route exact path="/login" component={LoginPage} />
                       <Route exact path="/logout" component={LogOut} />
                       <Route exact path="/autologin/:url" component={AutoLogin} />
                   </Switch>
               </BrowserRouter>
            </div>
       </MuiThemeProvider>
  );

export default App;

