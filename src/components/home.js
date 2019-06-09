import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Plane from '../assets/images/plane.png';

class Home extends Component {
    // state = {                Not using because of Redux (Central Store)
    //     posts: ''
    // };
    //
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             this.setState({
    //                 posts: res.data
    //             });
    //         })
    // }

    render() {
        // const posts = this.state.posts; // OR
        // const { posts } = this.state;

        const { posts } = this.props;

        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={ post.id }>
                        <img src={ Plane } alt="post"/>
                        <div className="card-content">
                            <Link to={ '/' + post.id }>
                                <span className="card-title">{ post.title }</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'>Loading Posts...</p>
        );
        return (
            <div className='container home'>
                <h1 className='center cyan-text accent-4'>Posts</h1>
                { postsList }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps)(Home);