import {addNumberRequest, addNumberError, addNumberSuccess, deleteContactRequest, deleteContactSuccess, deleteContactError} from '../actions/editContactAction';
import {getNumberRequest, getNumberSuccess, getNumberError} from '../actions/getContactsAction';
import axios from 'axios';

export const addNumber = contact => dispatch => {
    dispatch(addNumberRequest());

    axios.post('http://localhost:2000/contacts', contact).then(res => dispatch(addNumberSuccess(contact))).catch(err => dispatch(addNumberError()))
};

export const getContacts = () => dispatch => {
    dispatch(getNumberRequest());

    axios.get('http://localhost:2000/contacts').then(({data}) => dispatch(getNumberSuccess(data))).catch(err => dispatch(getNumberError()))
};

export const deleteContacts = (id) => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`http://localhost:2000/contacts/${id}`).then(res => dispatch(deleteContactSuccess(id)))
};
