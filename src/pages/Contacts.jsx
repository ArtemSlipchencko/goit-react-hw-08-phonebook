import React, {Component, lazy, Suspense} from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Contacts from '../components/Contascts/Contacts';
import Filter from '../components/Filter/Filter';
import Alert from '../components/Alert/Alert';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getContacts} from '../redux/operations/operations';
import {getContactsArr, getFilter} from '../redux/selectors';

class YourContacts extends Component {
    
    state = {
        filter: '',
        contactExist: false
    };

    componentDidMount() {
        this.props.getContacts();
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
                <Header />
                {this.props.isAuth ? <>
                            <h2>Contacts form</h2>
                            <Form checkContact={this.checkContact} />
                            <h2>Contacts list</h2>
                            <Filter filter={filter} handleFilter={this.handleFilter} />
                            <Contacts contacts={searchedContacts} />
                            <CSSTransition in={contactExist} unmountOnExit classNames="alert" timeout={250}>
                                <Alert ok={this.alertOk} />
                            </CSSTransition></> : <h2>Register or log in, please!</h2>}
                
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
    isAuth: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(YourContacts);