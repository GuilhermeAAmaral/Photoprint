import React from 'react'
import { useHistory } from 'react-router'
import logo from '../../image/logo.png'
import { Button } from '@material-ui/core'
import { C_Principal, C_Button, C_ButtonPrincipal, C_LogoTitle, C_Descrition } from './styled'
import { goToSearch, goToTendencies } from '../../routers/cordinator'

//página inicial da aplicação

const HomePage = () => {

    const history = useHistory()

    return (

        <C_Principal>

            <img src={logo} />
            <h1>photoprint.</h1>
            <p>O seu novo buscador de fotografias!</p>

            <C_ButtonPrincipal>
                <C_Button>
                    <Button onClick={() => goToTendencies(history)}
                        variant={"contained"}
                        color={"Primary"}
                        fullWidth
                    >
                        Tendências
                    </Button>
                </C_Button>

                <C_Button>
                    <Button onClick={() => goToSearch(history)}
                        variant={"contained"}
                        color={"primary"}
                        fullWidth
                    >
                        Pesquisar
                    </Button>
                </C_Button>

            </C_ButtonPrincipal>
        </C_Principal>
    )
}

export default HomePage