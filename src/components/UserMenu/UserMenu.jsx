import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/operations/authOperations';

class UserMenu extends Component {

    handleClick = () => {
        this.props.logout();
    };

    render () {
        const {user} = this.props;

        return (
            <div className="wrapper">
            <h2>Welcome, {user.name}</h2>
            <button className="exit-button" onClick={this.handleClick} type="button">Exit</button>
            </div>
        )
    };
    
};

const mapStateToProps = (state) => ({
    user: state.auth.user
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);