import React from 'react'

export default function Dados(props){
    return(
        <section>
            <p>Canal:{props.canal}</p>
            <p>Youtube:{props.youtube}</p>
            <p>Dados:{props.curso}</p>
        </section>
    )
}