import React, { Component } from 'react';
import { useHistory, useParams } from 'react-router-dom'

class Detail extends Component {
    constructor(props) {
        
    };
    render() {
        return (
            <div>
                <article>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h1>Detail</h1>
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