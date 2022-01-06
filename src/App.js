import React from 'react'
import Logo from './componentes/imagens/logo.png'
import Logo2 from './componentes/imagens/logo2.png'

export default function App(){
  const canal=()=>{
    return('CFB Cursos')
  }

  function curso(){
    return 'Curso de React'
  }
  return(
    <section>
      <header>
        <p>{'Canal: ' + canal()}</p>
        <p>{curso()}</p>
      </header>
      <section>
        <img src={Logo}/>
        <img src={Logo2}/>
        <img src='imagens/logo3.png'/>
      </section>
       
    </section>
  )
}