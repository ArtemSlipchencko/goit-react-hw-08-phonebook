import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
} from '../actions/authActions';

const init = {
    name: null,
    email: null,
};

const user = createReducer(init, {
    [registerSuccess]: (_, {payload}) => payload.user,
    [loginSuccess]: (_, {payload}) => payload.user,
    [logoutSuccess]: (_, {payload}) => payload.user,
    [getCurrentUserSuccess]: () => init
});

const token = createReducer(null, {
    [registerSuccess]: (_, {payload}) => payload.token,
    [loginSuccess]: (_, {payload}) => payload.token,
    [logoutSuccess]: () => null
});

const error = createReducer(null, {
    [registerError]: (_, {payload}) => payload,
    [loginError]: (_, {payload}) => payload,
    [logoutError]: (_, {payload}) => payload,
    [getCurrentUserError]: (_, {payload}) => payload
});

export default combineReducers({
    user,
    token,
    error
});