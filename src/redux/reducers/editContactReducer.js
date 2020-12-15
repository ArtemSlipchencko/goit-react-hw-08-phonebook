// import types from '../types.js';
import {getNumberRequest, getNumberSuccess, getNumberError} from '../actions/getContactsAction';
import {addNumberRequest, addNumberSuccess, addNumberError, deleteContactRequest, deleteContactSuccess, deleteContactError} from '../actions/editContactAction';
import {createReducer} from '@reduxjs/toolkit';

const init = [];

export const editContacts = createReducer(init, {
    [getNumberRequest.type]: (state) => state,
    [getNumberSuccess.type]: (state, {payload}) => payload,
    [getNumberError.type]: (state) => state,
    [addNumberRequest.type]: (state) => state,
    [addNumberSuccess.type]: (state, {payload}) => [...state, payload],
    [addNumberError.type]: (state) => state,
    [deleteContactRequest.type]: (state) => state,
    [deleteContactSuccess.type]: (state, {payload}) => (state.filter(contact => contact.id !== payload)),
    [deleteContactError.type]: (state) => state,
})

// export const editContacts = (state = init, {type, payload}) => {
//     switch (type) {
//         case types.ADD_CONTACT:
//             return [...state, {...payload}];
//         case types.DELETE_CONTACT:
//             return state.filter(contact => contact.id !== payload.id)
//         default:
//             return state; 
//     }
// }