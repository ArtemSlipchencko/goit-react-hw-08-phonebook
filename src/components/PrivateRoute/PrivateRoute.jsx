import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuth, ...routeProps}) => {
    return (
        <Route {...routeProps} render={props => {
            return isAuth ? (<Component {...props} />) : (<Redirect to="/login"/>);
        }}/>

    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);