import React from 'react';

function Nav(props) {
    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="post.html">Sample Post</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                {/* Page Header */}
                <header className="masthead" style={{backgroundImage: 'url("/img/home-bg.jpg")'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                        <h1>Clean Blog</h1>
                        <span className="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </div>
    );
}

export default Nav;