import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './Contacts.css';
import {deleteContacts} from '../../redux/operations/operations';
import {connect} from 'react-redux';

class Contacts extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        deleteContacts: PropTypes.func,
      };

    render() {
        
        const {contacts, deleteContacts} = this.props;
        
        return (
            <TransitionGroup component="ul">

                {
                    contacts.map(el => {
                        return (
                            <CSSTransition key={el.id} timeout={250} classNames="contact">
                                <li >{el.name}: {el.number} <button type="button" onClick={() => deleteContacts(el.id)}>Delete</button></li>
                            </CSSTransition>
                        )
                    })
                }

            </TransitionGroup>
    )}

};

const mapDispatchToProps = {
    deleteContacts,
};

export default connect(null, mapDispatchToProps)(Contacts);