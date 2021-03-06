import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        try {
            console.log(this.props);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data.slice(0, 8);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts});
        } catch (error) {
            console.log(error);
        }
    }

    postSelectedHander = id => {
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post  
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHander(post.id)}/>
                    </Link>
                )
            })
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;