import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

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

    // declare for signup
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        user_name: '',
        date_of_birth: '',
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
            .post('user/register/', {

            })
            .then(() => {

            });
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
                            <Link to="/" classname="nav-link">Home</Link>
                            </li>
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
                <form method="POST" aciton name="sentMessage" id="signInForm" noValidate>
                <input name="email" type="text" className="form-control" placeholder="Email" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <input name="password" type="password" className="form-control" placeholder="Password" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <button name="submit" type="submit" className="btn btn-primary" style={{borderRadius: '50px', padding: '0.5em', width: '100%', marginBottom: '10px'}}>Sign in</button>
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
                <input name="email" type="text" className="form-control" placeholder="Email" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <input name="username" type="text" className="form-control" placeholder="Username" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <input name="password" type="password" className="form-control" placeholder="Password" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <button name="submit" type="submit" className="btn btn-primary" style={{borderRadius: '50px', padding: '0.5em', width: '100%', marginBottom: '10px'}}>Sisn up</button>
                <div>Already have an account?  <span><Link onClick={showModal} style={{color: '#00cccc'}}>Sign in</Link></span></div>
                </form>
                </Modal.Body>
            </Modal>
        </div>
    ); 
}

export default Nav;