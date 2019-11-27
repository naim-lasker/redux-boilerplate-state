import React, { Component } from 'react'

class PostsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

    }

    submitForm = (e) => {
        e.preventDefault();

        const post= {
            title: this.state.title,
            body: this.state.body,
        }

        let api = 'https://jsonplaceholder.typicode.com/posts';
        fetch(api, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }



    onChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <label>Title:</label><br/>
                    <input type='text' name='title' value={this.state.title} onChange={this.onChange} /> 
                    <br/>

                    <label>Body:</label><br/>
                    <textarea type='text' name='body' value={this.state.body} onChange={this.onChange} />
                    <br/>

                    <button type='submit' onClick={this.submitForm.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostsForm;
