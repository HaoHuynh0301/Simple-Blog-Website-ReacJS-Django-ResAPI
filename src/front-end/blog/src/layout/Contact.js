import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: 0,
            message: ""
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state.message);
    
        fetch('http://127.0.0.1:8000/api/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
          }).then(function(response) {
            return response.json();
          });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <form name="sentMessage" id="contactForm" noValidate onSubmit={this.handleSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Name" name="name" id="name" 
                                        value={this.state.value} onChange={this.handleChange} required data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" placeholder="Email Address" name="email" id="email" 
                                        value={this.state.value} onChange={this.handleChange} required data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control" placeholder="Phone Number" name="phone" id="phone" 
                                        value={this.state.value} onChange={this.handleChange} required data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea rows={5} className="form-control" placeholder="Message" name="message" id="message" 
                                        value={this.state.value} onChange={this.handleChange} required data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <button type="submit" value="Submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Contact;