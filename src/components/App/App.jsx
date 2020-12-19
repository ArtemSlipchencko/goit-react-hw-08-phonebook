import React, {Component, lazy, Suspense} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from '../../redux/operations/authOperations';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';

class App extends Component {

    componentDidMount () {
        this.props.getCurrentUser();
    }

    render() {

        return (
            <>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <PublicRoute path="/" restricted={false} exact component={lazy(() => import('../../pages/Home'))}/>
                    <PublicRoute path="/register" restricted={true} component={lazy(() => import('../../pages/Register'))}/>
                    <PublicRoute path="/login" restricted={true} component={lazy(() => import('../../pages/Login'))}/>
                    <PrivateRoute path="/contacts" restricted={false} component={lazy(() => import('../../pages/Contacts'))}/>
                    <Redirect to="/" />
                </Switch>
            </Suspense>
            </>
        );

    };

};

const mapDispatchToProps = {
    getCurrentUser
};

export default connect(null, mapDispatchToProps)(App);