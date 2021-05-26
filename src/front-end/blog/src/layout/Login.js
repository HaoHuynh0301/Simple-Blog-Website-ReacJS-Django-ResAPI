import React, { Component, Button, Modal, useState } from 'react';
import Header from './Header.js'

class Login extends Component {
    render() {
        return (
            <div >
                <Header url="/img/blog.jpg" title="Login"/>
                <form action method="post" >
                    <div className="container d-flex justify-content-center">
                        <div className="row">
                            <div className="card mb-3" style={{minWidth: '500px', padding: '1em', marginTop: '0cm'}}>
                            <h3 className="d-flex justify-content-center mb-3">Login</h3>
                            <div className="input-group mb-3">
                                <input name="username" type="text" className="form-control" placeholder="Username" required style={{borderRadius: '50px'}} />
                            </div>
                            <div className="input-group mb-3">
                                <input name="password" type="password" className="form-control" placeholder="Password" required style={{borderRadius: '50px'}} />
                            </div>
                            <div className="input-group">
                                <button name="submit" type="submit" className="btn btn-primary" style={{borderRadius: '50px', padding: '0.5em', width: '100%'}}>Login</button>
                            </div>
                            <p style={{fontSize: '12pt'}}>Don't have account? <a href="#">Register here</a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;