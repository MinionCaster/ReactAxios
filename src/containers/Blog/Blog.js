import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>DANCE!</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;