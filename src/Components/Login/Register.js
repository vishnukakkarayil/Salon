import React from 'react';
import {Link} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact' 
const Register = () => {
    return(
        <div className="login-board-wrap">
            <div className="log-register">
                <div className="lr-left-wrap">
                    <div className="reg-desc">
                        <Link to="/">
                            {/* <img src="../../../src/A" */}
                            <img className="salon-logo" src="../../../src/Assets/logo.jpg" alt="logo"/>
                        </Link>
                        <p>It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout. The point                     
                            of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed .
                        </p>
                    </div>   
                </div>
                <div className="lr-right-wrap">
                    <div className="salon-register">                    
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol>
                                        <p className="h4 text-center mb-4">Register</p>
                                        <p className="text-center">I have an account <Link to="/login">Login</Link></p>
                                        <form>                                        
                                            <div className="grey-text">
                                            <MDBInput className="mb-0" label="Name" icon="user" group type="text" validate error="wrong"
                                                success="right" />
                                            <MDBInput className="mb-0" label="Phone number" icon="phone" group type="text" validate error="wrong"
                                                success="right"></MDBInput>
                                            <MDBInput className="mb-0" label="Email" icon="envelope" group type="email" validate error="wrong"
                                                success="right" />                            
                                            <MDBInput className="mb-0" label="Password" icon="lock" group type="password" validate />
                                            </div>
                                            <div className="text-center">
                                                <MDBBtn rounded gradient="blue">Register</MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>                  
                    </div>                
                </div>                
            </div>   
        </div>     
    )
}

export default Register;