import {createAction} from '@reduxjs/toolkit';

export const registerRequest = createAction('REG_REQUEST');
export const registerSuccess = createAction('REG_SUCCESS');
export const registerError = createAction('REG_ERROR');

export const loginRequest = createAction('LOG_REQUEST');
export const loginSuccess = createAction('LOG_SUCCESS');
export const loginError = createAction('LOG_ERROR');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutError = createAction('LOGOUT_ERROR');

export const getCurrentUserRequest = createAction('CURRENT_REQUEST');
export const getCurrentUserSuccess = createAction('CURRENT_SUCCESS');
export const getCurrentUserError = createAction('CURRENT_ERROR');
