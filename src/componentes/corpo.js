import React from 'react'
import Dados from './dados'

export default function Corpo(){
    const cnl=()=>{
        return 'CFB Cursos'
    }

    const yt='youtube.com/CFB Cursos'

    return(
        
    <section>
        
        <h2>Curso de React</h2>
        <p>Se inscreva em nosso canal!</p>
        <p>Ative as notificações!</p>
        <Dados canal={cnl} youtube={yt} curso='React.js'/>
    </section>
    )
}