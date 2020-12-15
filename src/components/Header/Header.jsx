import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    state = {
        showLogo: false,
    };

    componentDidMount() {
        this.setState(state => ({showLogo: !state.showLogo}));
    };

    render () {
        return (
            <CSSTransition in={this.state.showLogo} unmountOnExit classNames="logo" timeout={500}>
            <header>
                <h1>Phonebook</h1>
                <nav>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
                <NavLink className="nav-link" to="/login">Login</NavLink>
                </nav>
            </header>
            </CSSTransition>
        )
    };
    
};

export default Header;