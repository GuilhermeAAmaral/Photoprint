import React from 'react'
import { useHistory } from 'react-router'
import { goToDetail } from '../../routers/cordinator'
import { C_Image, C_Principal } from './styled'

//componente responsável por renderizar as imagens pesquisadas na aplicação

const RenderSearch = (props) => {

    const history = useHistory()

    const onClickCard = (id) => {
        goToDetail(history,id)
    }

    return (

        <C_Principal>
            
            <C_Image onClick={() => onClickCard(props.index.id)}>
                <img src={props.index.src.medium} /> 
            </C_Image>
                
        </C_Principal>
    )
}

export default RenderSearch