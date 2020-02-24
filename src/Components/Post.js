import React, { Component } from 'react'

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts :  []
        }
    }
    componentDidMount(){
      
    }
    render() {
        return (
            <div>
                <h1>Post</h1>
                {this.state.posts.map(x => (
                    <div key = {x.id}>
                        <h1>userId : {x.userId}</h1>
                    <h2>Title : {x.title}</h2>
                   <p>Content : {x.body}</p>
                   </div>
                ))}
            </div>
        )
    }
}

export default Post