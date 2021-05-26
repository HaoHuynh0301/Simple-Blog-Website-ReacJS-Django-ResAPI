import React, { Component, Button, Modal, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./layout/home.js"
import Footer from "./layout/footer.js"
import About from "./layout/About.js"
import Samplepost from "./layout/Samplepost.js"
import Contact from "./layout/Contact.js"
import Detail from "./layout/Detail.js"
import Login from "./layout/Login.js"
import Nav from "./layout/Nav.js"


class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
              <Nav />
              <Switch>
                <Route path="/login">
                  <Login/>
                </Route>

                <Route exact path="/detail/:id" component={Detail}> 
                </Route>

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
