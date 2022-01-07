import React from 'react'
import Header from './componentes/header'
import Corpo from './componentes/corpo'
import Dados from './componentes/dados'
 

export default function App(){

  const cnl='CFB Cursos'
  
    return(
      <>
      <Header/>
      <Corpo/>
      <Dados canal={cnl} youtube='youtube.com/cfbcursos' curso='React.js'/>
      </>

    )
  }

 
