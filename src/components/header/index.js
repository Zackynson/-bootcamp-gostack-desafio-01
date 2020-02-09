import React from 'react'
import './style.css'
import { MdPerson} from 'react-icons/md'

export default function header(){
  return(
    <header>
      <h1>facebook</h1>
      
      <div id="profile">
        <p>Meu perfil</p>
        <MdPerson id="icon"/>
      </div>
    </header>
  )
}