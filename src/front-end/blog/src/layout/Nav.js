import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Nav() {
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
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
                        </ul>
                    </div>
                </div>
            </nav>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title className = 'modal-title'>Sign in to BlogSite</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form method="POST" aciton name="sentMessage" id="contactForm" noValidate>
                <input name="email" type="text" className="form-control" placeholder="Email" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <input name="password" type="password" className="form-control" placeholder="Password" required style={{borderRadius: '50px', marginBottom: '10px'}} />
                <button name="submit" type="submit" className="btn btn-primary" style={{borderRadius: '50px', padding: '0.5em', width: '100%'}}>Login</button>
                </form>
                </Modal.Body>
            </Modal>
            
        </div>
    );
}

export default Nav;