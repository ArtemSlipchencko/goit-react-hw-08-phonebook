import React, {Component} from 'react';
import Header from '../components/Header/Header';
import {connect} from 'react-redux';
import {register} from '../redux/operations/authOperations';

class Register extends Component {

    state = {
        name: "",
        email: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register({...this.state});
        this.setState({name: "", email: "", password: ""})
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value })
    };

    render () {
        const {name, email, password} = this.state;

        return (
            <>
            <Header />
            {!this.props.isAuth ? <><h2>Register</h2>
            <form onSubmit={this.handleSubmit} className="reg-form">
                <label>Name</label>
                <input value={name} onChange={this.handleChange} name="name" type="text"/>

                <label>Email</label>
                <input value={email} onChange={this.handleChange} name="email" type="email"/>

                <label>Password</label>
                <input value={password} onChange={this.handleChange} name="password" type="password"/>

                <button type="submit">Register</button>

            </form></> : <h2>You are already registered.</h2>}
            </>
        )
    };
    
}

const mapDispatchToProps = {
    register
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);