import axios from 'axios';
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

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    }
};

export const register = credentials => dispatch => {
    dispatch(registerRequest());

    axios
        .post('/users/signup', credentials)
        .then(res => {
            dispatch(registerSuccess(res.data));
            token.set(res.data.token);
        })
        .catch(err => dispatch(registerError(err)));
};

export const login = credentials => dispatch => {
    dispatch(loginRequest());

    axios
        .post('/users/login', credentials)
        .then(res => {
            dispatch(loginSuccess(res.data));
            token.set(res.data.token);
        })
        .catch(err => dispatch(loginError(err)));
};

export const logout = () => dispatch => {
    dispatch(logoutRequest());

    axios
        .post('/users/logout')
        .then(res => {
            dispatch(logoutSuccess(res.data))
            token.unset();
        })
        .catch(err => dispatch(logoutError(err)));
};

export const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: {token: persistedToken}
    } = getState();

    if (!persistedToken) {
        return
    };

    token.set(persistedToken);
    dispatch(getCurrentUserRequest());

    axios
        .get('users/current')
        .then(({data}) => dispatch(getCurrentUserSuccess(data)))
        .catch(err => getCurrentUserError(err))
};