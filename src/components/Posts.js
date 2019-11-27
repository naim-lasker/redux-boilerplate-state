import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItem = this.props.posts.map(item => {
            return (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            )
        });

        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
