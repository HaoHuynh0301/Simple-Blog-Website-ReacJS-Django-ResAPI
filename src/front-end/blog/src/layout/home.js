import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import Header from './Header.js'

class Home extends Component{
    constructor(props) {
        super(props);
          this.state = {
            listPost: [],
            activeItem: {
              id: null,
              title: '',
              content: '',
            }
          }
          this.fetchTasks = this.fetchTasks.bind(this);
      };

      componentDidMount() {
        this.fetchTasks();
      }
    
      fetchTasks() {
        fetch('http://127.0.0.1:8000/api/')
        .then(response => response.json())
        .then(data => 
          this.setState({
            listPost:data
          })
        )
      }

    render() {
        var posts = this.state.listPost
        return (
            <div>
                <Header url="/img/blog.jpg" title="Show us your feeling" subtitle = "“The scariest moment is always just before you start.”"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                          {posts.map(function(post, index){
                              return (
                              <div key = {index} class="post-preview">
                                  <Link to={"/detail/" + post.id}>
                                      <h2 className="post-title">
                                          {post.title}
                                      </h2>
                                      <h3 className="post-subtitle">
                                          {post.content}
                                      </h3>
                                  </Link>
                                  <p className="post-meta">Posted on {post.date_pushed}</p>
                              </div>
                              )
                          })}
                          <div className="clearfix">
                              <a className="btn btn-primary float-right" href="#">Older Posts →</a>
                          </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
    
}

export default Home;