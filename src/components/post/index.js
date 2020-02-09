import React, {Component} from 'react';
import './style.css'

class Post extends Component{

  state={
    id:null,
    user:{name:'', avatar:''},
    date:'',
    content:''
  }

  componentDidMount(){
    const {id, user, date, content} = this.props.data
    this.setState({id,user,date,content})
  }

  render (){
    return  (
      <div id="container">
        <div id="info">
          <img className="avatar" src={this.state.user.avatar} alt={this.state.user.name}/>
          <div>
           <h2>{this.state.user.name}</h2>
           <small>{this.state.date}</small>
          </div>
        </div>
      <p id="content">{this.state.content}</p>
      <div id="commentaries">
        <div id="commentary">
        <img className="avatar" src="https://blog.rocketseat.com.br/content/images/2019/05/profile.png" alt="" srcset=""/>
          <p id="comentary-content"><strong id="username">Diego Fernandes</strong> A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Post;
