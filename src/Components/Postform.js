import React, { Component } from 'react'

 class Postform extends Component {
     constructor(props){
         super(props);
         this.state = {
             title : '',
             body : ''
         }
     }

    onTypeValue = (e) => {
       this.setState({
           [e.target.name] : e.target.value
          
       })
    }

     onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title : this.state.title,
            body : this.state.body
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method : 'POST',
            headers : {
              "content-type" : 'application/json',
            },
            body : JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log("data", data))
        

     }
    render() {
        return (
            <div>
                <h1>PostForm</h1>
                <form >
                    <div>
                        <label>Title</label><br />
                        <input type = "text" name = "title" placeholder = "Title" value = {this.state.title} onChange = {this.onTypeValue}/>
                    </div>
                    <br />
                    <div>
                        <label>Body</label><br />
                        <textarea name = "body"  placeholder = "Type Something here..." value = {this.state.body} onChange = {this.onTypeValue}/>
                    </div>
                    <br />
                    <button type = "submit" onClick = {this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}


export default Postform;