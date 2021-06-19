import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axiosInstance from '../axios';

function SignUpAlert(message) {
    if(message === 'signup') alert('Create account successfully !');
    alert('Sign in successfully !');
}

function Nav() {

    // declare for modal
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenSignUp, setIsOpenSignUp] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
        setIsOpenSignUp(false);
      };
    
    const hideModal = () => {
        setIsOpen(false);
    };

    const showModalSignUp = () => {
        setIsOpenSignUp(true);
        setIsOpen(false)
      };
    
    const hideModalSignUp = () => {
        setIsOpenSignUp(false);
    };

    // declare for signup and SignUp handle
    const initialFormData = Object.freeze({
        email: '',
        user_name: '',
        first_name: '',
        password: ''
    });
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
        
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formData');
        axiosInstance
            .post('api/user/register/', {
                email: formData.email,
                user_name: formData.username,
                first_name: formData.firstname,
                password: formData.password,
            })
            .then(() => {
                console.log('OK');
                SignUpAlert('signup');  
                showModal();
            });
    };

    const intialSignInFormData = Object.freeze({
        email: '',
        password: ''
    });
    const [formSignInData, updateSignInFormData] = useState(intialSignInFormData);
    const handleSignInChange = (e) => {
        updateSignInFormData({
            ...formSignInData,
            [e.target.name]: e.target.value.trim(),
        });
    };
    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log('formData');
        axiosInstance
            .post('token/', {
                email: formSignInData.email,
                password: formSignInData.password
            })
            .then((res) => {
                localStorage.setItem('access-token', res.data.access);
                localStorage.setItem('refresh-token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] = 
                    'JWT' + localStorage.getItem('access-token');
                SignUpAlert('signin'); 
                hideModal();
            }).catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/">BlogSite</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/samplepost">Sample Post</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link' onClick={showModal}>Sign In</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link' onClick={showModalSignUp}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title className = 'modal-title'>Sign in to BlogSite</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form noValidate>
                    <input name="email" type="text" className="form-control" placeholder="Email" 
                        onChange = {handleSignInChange}
                        required style={{borderRadius: '50px', marginBottom: '10px'}} />
                    <input name="password" type="password" className="form-control" placeholder="Password"
                        onChange = {handleSignInChange}
                        required style={{borderRadius: '50px', marginBottom: '10px'}} />
                    <button className="btn btn-primary" 
                        onClick = {handleSignInSubmit}
                        style={{borderRadius: '50px', padding: '0.5em', width: '100%', marginBottom: '10px'}}>Sign in</button>
                    <div>New to BlogSite?  <span className=""><Link onClick={showModalSignUp} style={{color: '#00cccc'}} >Create new account</Link></span></div>
                </form>
                </Modal.Body>
            </Modal>

            <Modal show={isOpenSignUp} onHide={hideModalSignUp}>
                <Modal.Header>
                    <Modal.Title className = 'modal-title'>Sign Up to BlogSite</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form method="POST" aciton name="sentMessage" id="signUpForm" noValidate>
                    <input name="email" type="text" className="form-control" 
                        onChange={handleChange}
                        placeholder="Email" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                    <input name="username" type="text" className="form-control" placeholder="Username" 
                        onChange={handleChange}
                        required style={{borderRadius: '50px', marginBottom: '10px'}} />
                    <input name="firstname" type="text" className="form-control" placeholder="First Name" 
                        onChange={handleChange}
                        required style={{borderRadius: '50px', marginBottom: '10px'}} />
                    <input name="password" type="password" className="form-control" placeholder="Password" 
                        onChange={handleChange}
                        required style={{borderRadius: '50px', marginBottom: '10px'}} />
                    <button name="submit" type="submit" className="btn btn-primary" 
                        onClick={handleSubmit}
                        style={{borderRadius: '50px', padding: '0.5em', width: '100%', marginBottom: '10px'}}>Sisn up</button>
                    <div>Already have an account?  <span><Link onClick={showModal} style={{color: '#00cccc'}}>Sign in</Link></span></div>
                </form>
                </Modal.Body>
            </Modal>
        </div>
    ); 
}

export default Nav;