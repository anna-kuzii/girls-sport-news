import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { Registration } from '../components/Registration';
import { Menu } from '../components/Menu/index';
import { Login } from '../containers/Login';
import { ForgotPassword } from '../containers/forgotPassword';

export const Routes = (): JSX.Element => (
    <Router>
        <Route exact={true} path='/' component={Menu} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/forgot-password' component={ForgotPassword} />
    </Router>
);
