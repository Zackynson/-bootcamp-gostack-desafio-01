import React, { Component } from 'react';
import Post from '../post/index'
import './style.css'

export default class postlist extends Component {
  state={
    posts:
    [
      { 
        id:1,
        author:{name:'Julio Alcantara', avatar:"https://mb.cision.com/Public/11571/2723198/94d70bece4bcac17_400x400ar.jpg"},
        date:'04 jun 2019',
        content:'Pessoal, alguém sabe se a rocketseat está contratando?',
        comments:[
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://blog.rocketseat.com.br/content/images/2019/05/profile.png"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      { 
        id:2,
        author:{name:'Gabriel Lisboa', avatar:"https://cdn.pixabay.com/photo/2019/05/24/10/59/business-man-4226005_960_720.jpg"},
        date:'04 jun 2019',
        content:'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments:[
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://www.royalfashionist.com.br/wp-content/uploads//2016/03/foto-SORRISO-LINEAR.jpg"
            },
            content: "Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
    ]
  }

  render() {
    return (
      <div id="postlist">
        {this.state.posts.map(post => (
        <Post 
          key={post.id} 
          data={post} />
          ))}
      </div>
    )
  }
}
