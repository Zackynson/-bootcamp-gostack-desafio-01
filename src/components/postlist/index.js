import React, { Component } from 'react';
import Post from '../post/index'

export default class postlist extends Component {
  state={
    posts:[
      { 
        id:1,
        user:{name:'Julio Alcantara', avatar:"https://mb.cision.com/Public/11571/2723198/94d70bece4bcac17_400x400ar.jpg"},
        date:'04 jun 2019',
        content:'Pessoal, alguém sabe se a rocketseat está contratando?'
      }
    ]
  }


  render() {
    return (
      <>
        {this.state.posts.map(post => (
        <Post 
          key={post.id} 
          data={post} />
          ))}
        

      </>
    )
  }
}

content:'Pessoal, alguém sabe se a rocketseat está contratando?'