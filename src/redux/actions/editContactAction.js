// import types from '../types.js';
import {createAction} from '@reduxjs/toolkit';

export const addNumberRequest = createAction('ADD_NUMBER_START');
export const addNumberSuccess = createAction('ADD_NUMBER_SUCCESS');
export const addNumberError = createAction('ADD_NUMBER_ERROR');

export const deleteContactRequest = createAction("DELETE_CONTACT_START");
export const deleteContactSuccess = createAction("DELETE_CONTACT_SUCCESS");
export const deleteContactError = createAction("DELETE_CONTACT_ERROR");

// export const getContact = ({name, number, id}) => (
//     {
//         type: types.ADD_CONTACT,
//         payload: {
//             name,
//             number,
//             id,
//         }
//     }
// )

// export const deleteContact = (id) => ({
//     type: types.DELETE_CONTACT,
//     payload: {
//         id,
//     }
// })