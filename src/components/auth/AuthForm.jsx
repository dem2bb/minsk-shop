import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUpOperation, signInOperation } from "../../redux/auth/auth-operations"

 class AuthForm extends Component {

    state = {
        email: "",
        password: "",
    }

    onHandleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
    
        this.props.location.pathname === "/signup"
            ? this.props.signUpOperation(this.state)
            : this.props.signInOperation(this.state)
    }

    render() {
        const {password, email}= this.state
        return (
            <form onSubmit={this.onHandleSubmit}>
                <label htmlFor="">Email
                    <input type="text"
                        value={email}
                        name="email"
                        onChange={this.onHandleChange}
                        />
                </label>
                <label htmlFor=""> Password
                    <input type="text"
                        value={password}
                        name="password"
                        onChange={this.onHandleChange}
                    />
                </label>
                <button type="submit">
                    {this.props.location.pathname==="/signup"?"Sign up": "Sing in"}
                </button>
            </form>
        )
    }
}


const mapDispatchToProps = {
    signUpOperation,
    signInOperation
  
}

export default connect(null, mapDispatchToProps) (AuthForm)