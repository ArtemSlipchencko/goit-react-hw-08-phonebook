import {combineReducers} from 'redux';
import {editContacts} from '../reducers/editContactReducer';
import {filterContacts} from '../reducers/filterReducer';
import authReducer from '../reducers/authReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

const rootReducer = combineReducers({
    contacts: editContacts,
    filter: filterContacts,
    auth: persistReducer(authPersistConfig, authReducer)
});

export default rootReducer;