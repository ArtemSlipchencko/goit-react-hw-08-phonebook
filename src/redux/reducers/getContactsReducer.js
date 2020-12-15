import {createReducer} from '@reduxjs/toolkit';
import {getNumberRequest, getNumberSuccess, getNumberError} from '../actions/getContactsAction';

const init = [];

export const getContacts = createReducer(init, {
    [getNumberRequest.type]: (state) => state,
    [getNumberSuccess.type]: (state) => state,
    [getNumberError.type]: (state) => state
})