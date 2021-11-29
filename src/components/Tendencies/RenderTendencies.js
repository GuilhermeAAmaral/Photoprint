import React from 'react'
import {C_Image, C_Principal } from './styled'

//componente responsável por renderizar as imagens tendências da semana/dia

const RenderTendencies = (props) => {

    return (

        <C_Principal>

            <C_Image>
               <img src={props.index.src.medium}/>
            </C_Image>
            
        </C_Principal>
    )
}

export default RenderTendencies