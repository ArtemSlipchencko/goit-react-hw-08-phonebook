import React, {Component} from 'react';
import shortId from 'short-id';
import './Form.css';
import {connect} from 'react-redux';
import {addNumber} from '../../redux/operations/operations';
import {getContactsArr} from '../../redux/selectors';

class Form extends Component {

    state = {
        name: "",
        number: ""
    };

    handleChange = ({target}) => {
        
        const {name, value} = target;

        this.setState( {[name]: value} );
         
    };
            
    handlerSubmit = (e) => {

        e.preventDefault();
        const {addNumber, checkContact, contacts} = this.props;
        const contact = this.newContact();
        if(checkContact(contacts, contact) === false) {addNumber(contact)};
        this.setState(prevState => { 
            return {name: '', number: ''}
        });

    };

    newContact = () => {

        const {name, number} = this.state;
        return {name: name, number: number, id: shortId.generate()};

    };

    render() {

        const {name, number} = this.state;

        return(
            <form className="form" onSubmit={this.handlerSubmit}>
                <label htmlFor="contactName" >Name</label>
                <input name="name" onChange={this.handleChange} value={name} type="text"/>
                <label htmlFor="contactNumber" >Number</label>
                <input name="number" onChange={this.handleChange} value={number} type="number"/>
                <button type="submit">Add Contact</button>
            </form>
        )
    };

};

const mapDispatchToProps = {
    addNumber,
};

const mapStateToProps = state => ({
    contacts: getContactsArr(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);