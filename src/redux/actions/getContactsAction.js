import {createAction} from '@reduxjs/toolkit';

export const getNumberRequest = createAction('GET_NUMBER_START');
export const getNumberSuccess = createAction('GET_NUMBER_SUCCESS');
export const getNumberError = createAction('GET_NUMBER_ERROR');