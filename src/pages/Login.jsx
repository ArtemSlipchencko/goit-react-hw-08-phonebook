import React, {Component} from 'react';
import Header from '../components/Header/Header';
import {login} from '../redux/operations/authOperations';
import {connect} from 'react-redux';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login({...this.state});
        this.setState({email: "", password: ""})
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value })
    };

    render () {
        const {email, password} = this.state;

        return (
            <>
            <Header />
            {!this.props.isAuth ? <><h2>Log In</h2>
            <form onSubmit={this.handleSubmit} className="log-form">
                <label>Email</label>
                <input value={email} onChange={this.handleChange} name="email" type="email"/>
    
                <label>Password</label>
                <input value={password} onChange={this.handleChange} name="password" type="password"/>
    
                <button type="submit">Log In</button>
    
            </form></> : <h2>You are already logged.</h2>}
            </>
        )
    }
    
}

const mapDispatchToProps = {
    login
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);