import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PublicRoute = ({component: Component, isAuth, restricted, ...routeProps}) => {
    return (
        <Route {...routeProps} render={props => {
            return isAuth && restricted ? (<Redirect to="/contacts"/>) : (<Component {...props} />);
        }}/>

    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);