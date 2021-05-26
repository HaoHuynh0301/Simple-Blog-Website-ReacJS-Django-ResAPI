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
                                <span className="subheading">“The scariest moment is always just before you start.”<br />Tùng Chùa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;