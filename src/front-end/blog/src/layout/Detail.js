import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom'

class Detail extends Component {
    
    constructor(props) {
        super(props);
          this.state = {
            listPost: [],
            activeItem: {
              id: null,
              title: '',
              content: '',
            },
          }
          this.fetchTasks = this.fetchTasks.bind(this);
    };

    componentDidMount() {
        this.fetchTasks();
    }
    
    fetchTasks() {
        fetch('http://127.0.0.1:8000/api/detail/' + this.props.match.params.id)
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
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <p>{posts.content}</p>
                            </div>
                        </div>
                    </div>
                </article>
                <hr />
            </div>
        );
    }
}

export default Detail;