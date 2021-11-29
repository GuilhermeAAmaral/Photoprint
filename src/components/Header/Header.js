import React from 'react'
import { C_Header, C_Nav} from './styled'
import { useHistory } from 'react-router'
import { goToHome, goToSearch, goToTendencies } from '../../routers/cordinator'

//componente responsável por renderizar o header da aplicação

const Header = () => {

    const history = useHistory()

    return ( 

        <C_Header>

            <C_Nav>
                <p onClick={() => goToHome(history)}>Home</p>
                <p onClick={() => goToTendencies(history)}>Tendências</p>
                <p onClick={() => goToSearch(history)}>Pesquisar</p>
            </C_Nav>

        </C_Header>
    )
}

export default Header