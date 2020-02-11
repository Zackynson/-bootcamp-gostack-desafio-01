import React, {Component} from 'react';
import './style.css'

class Post extends Component{

  state={
    id:null,
    author:{name:'', avatar:''},
    date:'',
    content:'',
    comments:[]
  }

  componentDidMount(){
    const {id, author, date, content, comments} = this.props.data
    this.setState({id,author,date,content,comments})
  }

  render (){
    return  (
      <div id="container">
        <div id="info">
          <img className="avatar" src={this.state.author.avatar} alt={this.state.author.name}/>
          <div>
           <h2>{this.state.author.name}</h2>
           <small>{this.state.date}</small>
          </div>
        </div>
      <p id="content">{this.state.content}</p>
      <div id="commentaries">
      {this.state.comments?.map(comment => (
      <div key={comment.id} id="commentary">
        <img className="avatar" src={comment.author.avatar} alt={comment.author.name}/>
          <p id="comentary-content"><strong id="username">{comment.author.name}</strong>{comment.content}</p>
        </div>) )}
        
      </div>
      </div>
    )
  }
}

export default Post;
