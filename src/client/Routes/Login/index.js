import React, { Component } from "react";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './utils/index.ts';
import './index.scss';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form 
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {
        
        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }    
    }

    login = (e) => {
        
        e.preventDefault();

        let formState = this.validateLoginForm();

        if(formState === true){
            var userList = JSON.parse(localStorage.getItem('users'));
            let validUser = false;
            for(var val of userList) {
                if(val.username == this.state.formData.email && val.password == this.state.formData.password){
                    validUser =  true;
                    break;
                }
            }
            if(validUser){
                this.props.history.push('/home')
            }
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Login">
                <div>
                    <form onSubmit={this.login}>
                        <div type="email" >
                            <div>Email</div>
                            <input type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                        { errors.email && 
                            <div>{errors.email}</div> 
                        }
                        </div >
                        <div type="password" >
                            <div>Password</div>
                            <input type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        { errors.password && 
                            <div>{errors.password}</div> 
                        }
                        </div>
                        <button type="submit" >Sign-In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;