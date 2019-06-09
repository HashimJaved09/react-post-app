import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/deleteActions';

class Post extends Component {
    // state = {                Not using because of Redux (Central Store)
    //     post: null
    // };
    //
    // componentDidMount() {
    //     let post_id = this.props.match.params.id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             });
    //         })
    // }
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    };
    render() {
        // const post = this.state.post ? (
        const post = this.props.post ? (
            <div className="center">
                <div className="card-content">
                    {/*<h4>{ this.state.post.title }</h4>*/}
                    {/*<p>{ this.state.post.body }</p>*/}
                    <h4 className='teal-text accent-4'>{ this.props.post.title }</h4>
                    <p>{ this.props.post.body }</p>
                    <button className='btn red lighten-2' onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
            ) : (
            <div className='center mt-5'>Loading Post...</div>
        );
        return (
            <div className="container">
                { post }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let post_id = ownProps.match.params.id;
    return {
        post: state.posts.find(post => post.id == post_id) // OR
        // post: state.posts.find((post) =>
        // {
        //     return post.id === post_id
        // })
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);