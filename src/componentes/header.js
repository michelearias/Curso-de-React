import React from 'react'
import Logo from './imagens/logo.png'

export default function header(){
    return(
        <header>
            <img src={Logo}/>
            <h1>CFB Cursos</h1>
        </header>
    )
}