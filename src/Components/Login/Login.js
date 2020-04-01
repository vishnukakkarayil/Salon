import React, {useState} from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import logo from '../../Assets/logo.jpg'
const Login = () => {
    const history = useHistory();
    // const[form,setState] = useState({
    //     username: '',
    //     password: ''
    // });
    const [form, setState] = useState({});
    const updateField = ({name, value}) => {
        setState({...form,[name]:value})
    }
    const loginSuccess = e =>{
        e.preventDefault();
        history.push('/home');
        console.log(form)
    }
    // const updateField = e =>{
    //     setState({
    //         ...form,
    //         username: e.target.value,
    //         password: e.target.value
    //     });
    // };    
    return(
        <div className="login-board-wrap">
            <div className="log-register">
                <div className="lr-left-wrap">
                    <div className="reg-desc">
                        <Link to="/">
                            {/* <img src="../../../src/A" */}
                            <img className="salon-logo" src={logo} />
                        </Link>
                        <p>It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout. The point                     
                            of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed .
                        </p>
                    </div>   
                </div>
                <div className="lr-right-wrap">
                    <div className="salon-login">                    
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol>
                                        <p className="h4 text-center mb-4">Sign in</p>
                                        <p className="text-center">Create my account <Link to="/register">Register</Link></p>
                                        <form onSubmit={loginSuccess}>                                        
                                            <div className="grey-text">
                                                <MDBInput className="mb-4" label="Email" icon="envelope" group type="email" validate error="wrong"
                                                    success="right" onChange={updateField} />
                                                <MDBInput label="Password" icon="lock" group type="password" validate onChange={updateField} />
                                            </div>
                                            <div className="text-center">
                                                {/* <input type="submit" value="submit" /> */}
                                                <MDBBtn rounded gradient="blue" type="submit">Sign In</MDBBtn>
                                            </div>
                                        </form>
                                        <Link>
                                            <p className="mt-3 text-center">Forget password</p>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>                  
                    </div>                
                </div>            
            </div>
        </div>
    )
}
export default withRouter(Login);