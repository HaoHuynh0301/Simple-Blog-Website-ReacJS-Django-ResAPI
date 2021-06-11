import React from 'react';

function Header(props) {
     return (
        <div>
            <header className="masthead" style={{backgroundImage: "url(" + props.url + ")"}}>
                <div className="overlay" />
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{props.title}</h1>
                                <span className="subheading">{props.subtitle}<br />Admin</span>
                                <a href="#" className="btn btn-outline-light mt-3" style={{borderRadius: '50px', padding: '0.75em 1.5em'}}>
                                    Write now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;