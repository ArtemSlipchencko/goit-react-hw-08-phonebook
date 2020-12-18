import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Contacts from '../components/Contascts/Contacts';
import Filter from '../components/Filter/Filter';
import Alert from '../components/Alert/Alert';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getContacts} from '../redux/operations/operations';
import {getContactsArr, getFilter} from '../redux/selectors';
import { Redirect } from 'react-router-dom';

class YourContacts extends Component {
    
    state = {
        contactExist: false
    };

    componentDidMount() {
        this.props.getContacts();
        if (!this.props.isAuth) {
            this.props.history.push('/login');
        }
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

        const {contactExist} = this.state;
        const {filter} = this.props;
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
                            </CSSTransition></> : <Redirect to="/login" />}
                
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