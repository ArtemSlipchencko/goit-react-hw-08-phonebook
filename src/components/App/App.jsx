import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Contacts from '../Contascts/Contacts';
import Filter from '../Filter/Filter';
import Alert from '../Alert/Alert';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getContacts} from '../../redux/operations/operations';
import {getContactsArr, getFilter} from '../../redux/selectors';

class App extends Component {

    state = {
        showLogo: false,
        filter: '',
        contactExist: false
    };

    componentDidMount() {
        this.props.getContacts();
        this.setState(state => ({showLogo: !state.showLogo}));
    };

    findContact = () => {
        const {contacts, filterWord} = this.props;
            return contacts.filter(contact => contact.name.toLowerCase().includes(filterWord.toLowerCase()),
        );
    };

    checkContact = (contacts, contact) => {

        if (contacts.find((el) => el.name === contact.name)) {
            this.setState({contactExist: true}) 
            return true;
        };

        return false;
        
    };

    alertOk = () => {
        this.setState({contactExist: false})
    };

    render() {

        const {filter, showLogo, contactExist} = this.state;
        const searchedContacts = this.findContact();

        return (
            <>
                <CSSTransition in={showLogo} unmountOnExit classNames="logo" timeout={500}>
                    <h1>Phonebook</h1>
                </CSSTransition>
                <h2>Contacts form</h2>
                <Form checkContact={this.checkContact} />
                <h2>Contacts list</h2>
                <Filter filter={filter} handleFilter={this.handleFilter} />
                <Contacts contacts={searchedContacts} />
                <CSSTransition in={contactExist} unmountOnExit classNames="alert" timeout={250}>
                    <Alert ok={this.alertOk} />
                </CSSTransition>
            </>
        );

    };

};

const mapDispatchToProps = {
    getContacts
};

const mapStateToProps = state => ({
    contacts: getContactsArr(state),
    filterWord: getFilter(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);