import React, { Component } from "react";
import { connect } from 'react-redux';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './utils/index.ts';
import './index.scss';
import {setLoginUser} from './store/actions';

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

        let errorNotOccured = this.validateLoginForm();

        if(errorNotOccured === true){
            var userList = JSON.parse(localStorage.getItem('users'));
            let validUser = false;
            let user = null;
            for(var val of userList) {
                if(val.email == this.state.formData.email && val.password == this.state.formData.password){
                    validUser =  true;
                    user = val;
                    break;
                }
            }
            if(validUser){
                this.props.setUser(user);
                this.props.history.push('/home')
            }
        } else {
            this.setState({
                errors: errorNotOccured,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <React.Fragment>
            <form id="login" onSubmit={this.login}>
                <h1>Log In</h1>
                <div id="inputs">
                    <input id="username" name="email" type="text" placeholder="Username" autoFocus  onChange={this.handleInputChange} />
                    { errors.email && 
                        <div>{errors.email}</div> 
                    }   
                    <input id="password"  name="password" type="password" placeholder="Password"  onChange={this.handleInputChange} />
                    { errors.password && 
                        <div>{errors.password}</div> 
                    }   
                </div>
                <div id="actions">
                    <input type="submit" id="submit" value="Log in" />
                </div>
            </form>
        </React.Fragment>

            //  <React.Fragment>
            //     <form onSubmit={this.login} id="login">
                
            //         <div type="email" >
            //             <div>Email</div>
            //             <input type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
            //         { errors.email && 
            //             <div>{errors.email}</div> 
            //         }
            //         </div >
            //         <div type="password" >
            //             <div>Password</div>
            //             <input type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
            //         { errors.password && 
            //             <div>{errors.password}</div> 
            //         }
            //         </div>
            //         <button type="submit" >Sign-In</button>
            //     </form>
            // </React.Fragment> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setUser: (loginUser) => {
        dispatch(setLoginUser(loginUser));
      }
    };
};
  
export default connect(
    null,
    mapDispatchToProps
)(Login);
  
  