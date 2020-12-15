import {combineReducers} from 'redux';
import {editContacts} from '../reducers/editContactReducer';
import {filterContacts} from '../reducers/filterReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
    contacts: editContacts,
    filter: filterContacts,
    auth: authReducer
})

export default rootReducer;