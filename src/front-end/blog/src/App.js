import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./layout/home.js"
import Nav from "./layout/Nav.js"
import Footer from "./layout/footer.js"
import About from "./layout/About.js"
import Samplepost from "./layout/Samplepost.js"
import Contact from "./layout/Contact.js"

class App extends Component {
  constructor(props) {
    super(props);
      
  };

  render() {
      return (
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">CBlog</a>
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
                            <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/samplepost">Sample Post</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    </header>
              <Switch>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/samplepost">
                  <Samplepost />
                </Route>

                <Route path="/about">
                  <About />
                </Route>

                <Route path="/">
                  <Home />
                </Route>

              </Switch>
              <Footer />
          </div>
        </Router>   
    );
  }
  
}

export default App;
