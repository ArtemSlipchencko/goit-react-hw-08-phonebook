import {addNumberRequest, addNumberError, addNumberSuccess, deleteContactRequest, deleteContactSuccess, deleteContactError} from '../actions/editContactAction';
import {getNumberRequest, getNumberSuccess, getNumberError} from '../actions/getContactsAction';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const addNumber = contact => dispatch => {
    dispatch(addNumberRequest());

    axios.post('/contacts', contact).then(res => dispatch(addNumberSuccess(contact))).catch(err => dispatch(addNumberError()))
};

export const getContacts = () => dispatch => {
    dispatch(getNumberRequest());

    axios.get('/contacts').then(({data}) => dispatch(getNumberSuccess(data))).catch(err => dispatch(getNumberError()))
};

export const deleteContacts = (id) => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${id}`).then(res => dispatch(deleteContactSuccess(id)))
};
